import Link from 'next/link';
import { PageHero } from '@/components/shared/PageHero';
import { LegalList, LegalSection } from '@/components/shared/LegalContent';
import { contactEmail } from '@/lib/data';

// NOTE: draft text. Ask the client (or their counsel) to review before going live.

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        title="Disclaimer"
        subtitle="Please read this notice before using the H&B Legal and Consultant website."
      />

      <section className="section-pad">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <LegalSection title="Bar Council of India rules">
            <p>
              The Bar Council of India does not permit advertisement or solicitation by
              advocates in any form or manner. This website is not intended to be, and
              should not be read as, an advertisement, a solicitation or an invitation to
              seek legal services.
            </p>
            <p>
              By accessing this website you acknowledge that you are seeking information
              about H&B Legal and Consultant of your own accord, and that there has been no
              solicitation or advertisement by the firm or any of its members.
            </p>
          </LegalSection>

          <LegalSection title="General information, not legal advice">
            <p>
              The content on this website is provided for general informational purposes
              only. It does not constitute legal advice and should not be relied on as a
              substitute for advice from a qualified advocate who has reviewed the facts of
              your specific situation.
            </p>
            <p>
              Laws, rules and court practice change. We try to keep the information on this
              site accurate, but we do not guarantee that it is complete or up to date.
            </p>
          </LegalSection>

          <LegalSection title="No advocate-client relationship">
            <p>
              Using this website, reading its content, or sending us a message through the
              contact form, email, telephone or WhatsApp does not create an advocate-client
              relationship. Such a relationship begins only when the firm has agreed to act
              for you, and the terms of the engagement have been confirmed with you.
            </p>
            <p>
              Please do not send confidential, privileged or time-sensitive information
              through this website before an engagement has been confirmed. Messages sent
              through the site may not be protected by professional privilege.
            </p>
          </LegalSection>

          <LegalSection title="Links to other websites">
            <p>
              This website may link to third-party services such as maps and messaging
              platforms. We do not control those services and are not responsible for their
              content, availability or privacy practices.
            </p>
          </LegalSection>

          <LegalSection title="Limitation of liability">
            <p>
              To the fullest extent permitted by law, H&B Legal and Consultant, its partners
              and associates are not liable for any loss or damage arising from the use of,
              or reliance on, the information on this website.
            </p>
          </LegalSection>

          <LegalSection title="Your use of this website">
            <LegalList
              items={[
                'You will use the website only for lawful purposes.',
                'You will not attempt to disrupt, damage or gain unauthorised access to the website.',
                'The text, design and images on this website belong to H&B Legal and Consultant or its licensors, and may not be copied or reused without permission.',
              ]}
            />
          </LegalSection>

          <LegalSection title="Changes to this notice">
            <p>
              We may update this disclaimer from time to time. The version published on
              this page is the one that applies.
            </p>
          </LegalSection>

          <LegalSection title="Questions">
            <p>
              If you have questions about this notice, write to us at{' '}
              <a href={`mailto:${contactEmail}`} className="font-medium text-primary underline">
                {contactEmail}
              </a>
              . Our approach to personal information is described in our{' '}
              <Link href="/privacy-policy" className="font-medium text-primary underline">
                Privacy Policy
              </Link>
              .
            </p>
          </LegalSection>
        </div>
      </section>
    </>
  );
}
