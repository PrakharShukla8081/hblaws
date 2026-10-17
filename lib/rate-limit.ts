type Entry = { count: number; resetAt: number };

const store = new Map<string, Entry>();

/**
 * Simple in-memory rate limiter (best effort).
 * On serverless hosting each instance keeps its own counter, so this stops
 * basic spam but is not a hard guarantee.
 */
export function rateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now();

  // Occasional cleanup so the map does not grow forever
  if (store.size > 500) {
    store.forEach((entry, k) => {
      if (entry.resetAt <= now) store.delete(k);
    });
  }

  const entry = store.get(key);
  if (!entry || entry.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, retryAfter: 0 };
  }

  if (entry.count >= limit) {
    return { ok: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count += 1;
  return { ok: true, retryAfter: 0 };
}

export function getClientIp(req: Request) {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return req.headers.get('x-real-ip') ?? 'unknown';
}