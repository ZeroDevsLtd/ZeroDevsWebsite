import React from 'react';

const Privacy = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-2">Zerodevs – Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-8">Last Updated: {formattedDate}</p>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            This Privacy Policy explains how Zerodevs collects, uses, shares, and safeguards your personal information when you use our websites, SaaS products, mobile applications, APIs, or other services (collectively, “Services”). By using our Services, you agree to the practices described in this Privacy Policy. If you do not agree, please discontinue use immediately.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
          <h3 className="font-semibold">a. Information You Provide Directly</h3>
          <ul className="list-disc ml-6">
            <li>Name, email address, phone number, billing address</li>
            <li>Company name and job title</li>
            <li>Account login credentials</li>
            <li>Payment details (processed securely by third-party payment providers)</li>
            <li>Support requests, feedback, and communications</li>
          </ul>
          <h3 className="font-semibold mt-3">b. Information Collected Automatically</h3>
          <ul className="list-disc ml-6">
            <li>IP address and browser type</li>
            <li>Device information (model, OS, settings)</li>
            <li>Usage data: pages visited, features used, session length</li>
            <li>Cookies, web beacons, and similar tracking technologies</li>
          </ul>
          <h3 className="font-semibold mt-3">c. Information from Third Parties</h3>
          <ul className="list-disc ml-6">
            <li>Data from integrations (e.g., Google, GitHub, Stripe)</li>
            <li>Marketing partners and lead generation services</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
          <ul className="list-disc ml-6">
            <li>Service delivery – to provide and operate our Services</li>
            <li>Account management – including authentication and billing</li>
            <li>Customer support – to respond to requests and inquiries</li>
            <li>Service improvement – to analyze usage and enhance features</li>
            <li>Marketing – to send newsletters, promotions, and product updates (with opt-out option)</li>
            <li>Legal compliance – to meet regulatory and contractual obligations</li>
            <li>Fraud prevention & security – to detect and prevent misuse of our Services</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Legal Bases for Processing (GDPR)</h2>
          <p>If you are in the EU/EEA or UK, we process your personal data under these lawful bases:</p>
          <ul className="list-disc ml-6">
            <li>Contract – necessary to perform the agreement with you</li>
            <li>Consent – where you have given explicit permission (e.g., marketing emails)</li>
            <li>Legal obligation – required by law or regulation</li>
            <li>Legitimate interests – improving our services, preventing fraud</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Data Sharing & Disclosure</h2>
          <p>We do not sell your personal information. We may share data with:</p>
          <ul className="list-disc ml-6">
            <li>Service providers – hosting, payment processing, analytics, customer support</li>
            <li>Business partners – when you use integrations or third-party features</li>
            <li>Authorities – when legally required (e.g., subpoenas, court orders)</li>
            <li>Corporate transactions – in case of a merger, acquisition, or sale of assets</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. International Data Transfers</h2>
          <p>
            If your data is transferred outside the EU/EEA, UK, or your country of residence, we ensure appropriate safeguards such as Standard Contractual Clauses or equivalent legal mechanisms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
          <p>Depending on your jurisdiction (GDPR, CCPA, etc.), you may have the right to:</p>
          <ul className="list-disc ml-6">
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Request deletion (“Right to be forgotten”)</li>
            <li>Restrict or object to processing</li>
            <li>Request data portability</li>
            <li>Withdraw consent at any time</li>
            <li>Opt out of certain data sales or sharing (CCPA)</li>
          </ul>
          <p>
            Requests can be made via info@zerodevs.com. We will respond within the required legal timeframe.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Cookies & Tracking Technologies</h2>
          <p>We use cookies to:</p>
          <ul className="list-disc ml-6">
            <li>Keep you logged in</li>
            <li>Remember preferences</li>
            <li>Analyze traffic and improve performance</li>
            <li>Deliver targeted advertisements (where applicable)</li>
          </ul>
          <p>
            You can manage or disable cookies via your browser settings. Some features may not function without them.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. Data Retention</h2>
          <ul className="list-disc ml-6">
            <li>Active accounts – for the duration of your use of the Services</li>
            <li>Closed accounts – retained for up to [X months/years] unless required by law</li>
            <li>Payment and transaction data – retained per tax and accounting laws</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">10. Security Measures</h2>
          <p>We implement technical and organizational safeguards to protect your data, including:</p>
          <ul className="list-disc ml-6">
            <li>Encryption in transit (HTTPS/TLS)</li>
            <li>Secure server infrastructure</li>
            <li>Regular security audits</li>
            <li>Role-based access control</li>
          </ul>
          <p>However, no system is 100% secure, and we cannot guarantee absolute security.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">11. Children's Privacy</h2>
          <p>
            Our Services are not intended for children under 16 (or the legal minimum age in your country). We do not knowingly collect data from children.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">12. Third-Party Links</h2>
          <p>
            Our Services may contain links to third-party websites. We are not responsible for their privacy practices or content.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">13. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Significant changes will be notified via email or website notice.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">14. Contact Us</h2>
          <p>
            If you have questions or wish to exercise your rights: Email: info@zerodevs.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;


