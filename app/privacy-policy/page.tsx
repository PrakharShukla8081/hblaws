import Link from 'next/link';
import { PageHero } from '@/components/shared/PageHero';
import { LegalList, LegalSection } from '@/components/shared/LegalContent';
import { contactEmail, offices } from '@/lib/data';

// NOTE: draft text written from what the website actually does today.
// Ask the client (or their counsel) to review it before going live, and update it
// if analytics, advertising or other tools are added later.

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How H&B Legal and Consultant handles personal information collected through this website."
      />

      <section className="section-pad">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <p className="mb-10 text-sm text-muted-foreground">Last updated: 17 October 2026</p>

          <LegalSection title="Who we are">
            <p>
              This website is operated by H&B Legal and Consultant, a law firm with offices
              in Delhi, Noida and Mumbai. In this policy, &quot;we&quot;, &quot;us&quot; and
              &quot;our&quot; mean H&B Legal and Consultant.
            </p>
          </LegalSection>

          <LegalSection title="Information we collect">
            <p>We collect only what you choose to give us, plus a few items stored on your device.</p>
            <LegalList
              items={[
                <>
                  <strong>Contact and appointment form:</strong> your name, email address,
                  phone number (optional), the subject of your enquiry and your message.
                </>,
                <>
                  <strong>Newsletter:</strong> the email address you enter in the newsletter
                  box.
                </>,
                <>
                  <strong>Preferences stored in your browser:</strong> your chosen colour
                  theme, whether you have acknowledged our disclaimer, and whether you have
                  dismissed the cookie notice. These stay on your device and are not sent to
                  us.
                </>,
                <>
                  <strong>Technical data:</strong> like most websites, our hosting provider
                  may automatically record basic technical information such as IP address,
                  browser type and pages requested, for security and reliability.
                </>,
              ]}
            />
            <p>
              At the time of writing, this website does not use advertising cookies or
              third-party analytics.
            </p>
          </LegalSection>

          <LegalSection title="How we use your information">
            <LegalList
              items={[
                'To respond to your enquiry or request for a consultation.',
                'To send you the newsletter if you have subscribed, which you can stop at any time.',
                'To keep the website secure and to prevent spam and misuse.',
                'To meet our legal and professional obligations.',
              ]}
            />
          </LegalSection>

          <LegalSection title="Who we share it with">
            <p>We do not sell your personal information. We share it only where needed to run the website:</p>
            <LegalList
              items={[
                'An email delivery service that carries messages from this website to our inbox.',
                'Our website hosting provider.',
                'Authorities or courts, where we are required to do so by law.',
              ]}
            />
          </LegalSection>

          <LegalSection title="Please do not send confidential details">
            <p>
              Messages sent through this website are not covered by an advocate-client
              relationship until the firm has agreed to act for you. Please keep your first
              message short and do not include confidential or sensitive documents. See our{' '}
              <Link href="/disclaimer" className="font-medium text-primary underline">
                Disclaimer
              </Link>{' '}
              for more.
            </p>
          </LegalSection>

          <LegalSection title="How long we keep it">
            <p>
              We keep enquiry and newsletter details for as long as needed to deal with your
              request, to keep records that professional or legal rules require, or until
              you ask us to delete them, whichever applies.
            </p>
          </LegalSection>

          <LegalSection title="Your choices and rights">
            <p>
              You may ask us to tell you what personal information we hold about you, to
              correct it, or to delete it, and you may withdraw your consent to the
              newsletter at any time. We will handle your request in line with applicable
              Indian law. To make a request, email us at{' '}
              <a href={`mailto:${contactEmail}`} className="font-medium text-primary underline">
                {contactEmail}
              </a>
              .
            </p>
            <p>
              You can clear the preferences stored in your browser at any time through your
              browser settings.
            </p>
          </LegalSection>

          <LegalSection title="Security">
            <p>
              We take reasonable steps to protect the information you send us. No method of
              transmission over the internet is completely secure, so we cannot guarantee
              absolute security.
            </p>
          </LegalSection>

          <LegalSection title="Children">
            <p>This website is not directed at children, and we do not knowingly collect their personal information.</p>
          </LegalSection>

          <LegalSection title="Links to other websites">
            <p>
              Our website links to services such as maps and WhatsApp. Those services have
              their own privacy policies, and we are not responsible for them.
            </p>
          </LegalSection>

          <LegalSection title="Changes to this policy">
            <p>
              We may update this policy from time to time. The date at the top of the page
              shows when it was last changed.
            </p>
          </LegalSection>

          <LegalSection title="Contact us">
            <p>
              Email:{' '}
              <a href={`mailto:${contactEmail}`} className="font-medium text-primary underline">
                {contactEmail}
              </a>
            </p>
            {offices.map((office) => (
              <p key={office.city}>
                <strong>{office.city}:</strong> {office.address}
              </p>
            ))}
          </LegalSection>
        </div>
      </section>
    </>
  );
}
