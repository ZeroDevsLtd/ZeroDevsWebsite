import React from 'react';

const Terms = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-2">Zerodevs – Terms & Conditions</h1>
      <p className="text-sm text-gray-600 mb-8">Last Updated: {formattedDate}</p>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Welcome to Zerodevs, accessible via zerodevs.com and related domains, applications, and services. These Terms & Conditions govern your access to and use of our websites, SaaS products, mobile applications, APIs, and any other services we provide (collectively referred to as the "Services").
          </p>
          <p>
            By using our Services, you agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree, you must immediately stop using our Services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Scope of Application</h2>
          <p>These Terms apply to:</p>
          <ul className="list-disc ml-6">
            <li>Visitors to our website</li>
            <li>Registered users of any Zerodevs SaaS product</li>
            <li>Customers purchasing paid subscriptions or services</li>
            <li>API and developer platform users</li>
            <li>Partners, resellers, or affiliates using our tools in any capacity</li>
          </ul>
          <p>
            These Terms prevail over any conflicting statements elsewhere unless expressly stated in writing by Zerodevs.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Account Registration & Responsibilities</h2>
          <ul className="list-disc ml-6">
            <li>You must provide accurate, complete, and current information during registration.</li>
            <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
            <li>Any activity under your account will be deemed as your own.</li>
            <li>You must immediately notify us if you suspect unauthorized access to your account.</li>
            <li>We reserve the right to suspend or terminate accounts for violation of these Terms or misuse of the Services.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Eligibility</h2>
          <ul className="list-disc ml-6">
            <li>You must be at least the legal age of majority in your jurisdiction.</li>
            <li>Use of our Services is prohibited where local laws or sanctions restrict it.</li>
            <li>By using our Services, you represent that you have the legal capacity to enter into a binding contract.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Intellectual Property Rights</h2>
          <ul className="list-disc ml-6">
            <li>All materials within the Services, including text, code, graphics, designs, logos, videos, and documentation, are the exclusive property of Zerodevs or our licensors.</li>
            <li>You are granted a non-exclusive, non-transferable, revocable license to use the Services for your internal business or personal purposes only.</li>
            <li>You may not reverse-engineer, copy, distribute, sell, sublicense, or modify any part of our Services without prior written permission.</li>
            <li>Any feedback, suggestions, or ideas you provide to us may be used freely without any obligation to you.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. SaaS Subscription & Payments</h2>
          <ul className="list-disc ml-6">
            <li>Subscriptions are billed in advance and renew automatically unless cancelled before the renewal date.</li>
            <li>Prices are displayed in USD (or your local currency where applicable) and may be changed with prior notice.</li>
            <li>Payment methods include credit/debit cards, bank transfers, and other approved channels.</li>
            <li>Failure to process payment may lead to suspension or termination of your account.</li>
            <li>Refunds are governed strictly by our Refund Policy.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Acceptable Use Policy</h2>
          <p>You must not:</p>
          <ul className="list-disc ml-6">
            <li>Use our Services for any unlawful or harmful activity</li>
            <li>Upload malware, viruses, or harmful code</li>
            <li>Engage in spamming, phishing, or unauthorized data harvesting</li>
            <li>Infringe on the intellectual property rights of others</li>
            <li>Use the Services to compete with Zerodevs unless expressly permitted</li>
          </ul>
          <p>
            Violation of this policy may result in immediate suspension, without refund, and possible legal action.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Data Protection & Privacy (GDPR/Global Compliance)</h2>
          <ul className="list-disc ml-6">
            <li>Zerodevs complies with EU General Data Protection Regulation (GDPR), UK GDPR, and other applicable privacy laws.</li>
            <li>If you are an EU/EEA or UK resident, you have the right to:
              <ul className="list-disc ml-6">
                <li>Access your personal data</li>
                <li>Request correction or deletion</li>
                <li>Restrict or object to processing</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time without affecting lawfulness of prior processing</li>
              </ul>
            </li>
            <li>Data transfers outside the EU/EEA comply with Standard Contractual Clauses or other approved mechanisms.</li>
            <li>We act as a Data Controller for account and billing information, and as a Data Processor for customer-uploaded data under our SaaS.</li>
            <li>A Data Processing Agreement (DPA) is available upon request for business customers.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. Cookies & Tracking</h2>
          <p>
            Our websites use cookies, pixels, and tracking technologies for functionality, analytics, and marketing. By using our Services, you consent to their use as described in our Cookie Policy.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">10. Service Availability & Changes</h2>
          <ul className="list-disc ml-6">
            <li>We aim to maintain 99% uptime for our SaaS products but do not guarantee uninterrupted service.</li>
            <li>Scheduled maintenance and unforeseen outages may occur.</li>
            <li>We reserve the right to modify, suspend, or discontinue features without prior notice.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">11. Third-Party Services</h2>
          <p>
            Our Services may integrate with third-party platforms. Use of such services is subject to their own terms and privacy policies. Zerodevs is not liable for the performance, security, or compliance of third-party tools.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">12. Disclaimers</h2>
          <ul className="list-disc ml-6">
            <li>Services are provided “as is” and “as available,” without any warranties, express or implied.</li>
            <li>We do not warrant that the Services will be error-free, secure, or uninterrupted.</li>
            <li>Zerodevs is not responsible for loss of data, profits, or business opportunities resulting from use or inability to use the Services.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">13. Limitation of Liability</h2>
          <p>
            Our total liability for any claim will not exceed the amount you paid to us in the past 6 months. We are not liable for indirect, incidental, special, or consequential damages.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">14. Indemnification</h2>
          <p>You agree to indemnify and hold harmless Zerodevs from any claims, damages, or liabilities arising from:</p>
          <ul className="list-disc ml-6">
            <li>Your use of the Services</li>
            <li>Your violation of these Terms</li>
            <li>Your infringement of third-party rights</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">15. Termination</h2>
          <ul className="list-disc ml-6">
            <li>We may terminate or suspend your account at our sole discretion, with or without notice, for violations of these Terms.</li>
            <li>Upon termination, your license to use the Services ceases immediately, and we may delete your data after the applicable retention period.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">16. Governing Law & Dispute Resolution</h2>
          <p>
            These Terms are governed by the laws of United States, without regard to conflict-of-law rules. Any disputes shall first be attempted to be resolved amicably; if unresolved, they shall be submitted to binding arbitration or the courts of New York, USA.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">17. Force Majeure</h2>
          <p>
            We are not responsible for delays or failures caused by events outside our reasonable control, including natural disasters, war, labor disputes, cyber-attacks, or government actions.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">18. Changes to Terms</h2>
          <p>
            We may revise these Terms at any time. Significant changes will be communicated via email or site notice. Continued use of the Services after changes constitutes acceptance.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">19. Contact Us</h2>
          <p>
            For questions regarding these Terms & Conditions: Email: info@zerodevs.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default Terms;


