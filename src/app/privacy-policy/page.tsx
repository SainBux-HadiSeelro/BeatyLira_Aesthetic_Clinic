import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "BeautyLira's privacy policy — how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-40 pb-24 bg-ivory">
      <div className="container-lira max-w-3xl mx-auto">
        <p className="section-label mb-4">Legal</p>
        <h1 className="heading-xl text-espresso mb-6">Privacy Policy</h1>
        <p className="body-sm mb-10">Last updated: January 2025</p>

        <div className="space-y-10 body-lg">
          <div>
            <h2 className="heading-md text-espresso mb-4">1. Introduction</h2>
            <p>BeautyLira (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>
          </div>
          <div>
            <h2 className="heading-md text-espresso mb-4">2. Data We Collect</h2>
            <p>We may collect the following personal data: name, email address, phone number, date of appointment, treatment preferences, and any information you provide in forms. We also collect technical data such as IP address, browser type, and page views via analytics.</p>
          </div>
          <div>
            <h2 className="heading-md text-espresso mb-4">3. How We Use Your Data</h2>
            <p>We use your data to schedule and manage your appointments, respond to your enquiries, send booking confirmations and reminders, improve our services, and comply with legal obligations. We do not sell your personal data to third parties.</p>
          </div>
          <div>
            <h2 className="heading-md text-espresso mb-4">4. Data Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. All clinical records are stored securely in compliance with UK GDPR.</p>
          </div>
          <div>
            <h2 className="heading-md text-espresso mb-4">5. Your Rights</h2>
            <p>Under UK GDPR, you have the right to access, correct, or request deletion of your personal data. You may also object to processing or request a portable copy of your data. To exercise these rights, contact us at privacy@beautylira.com.</p>
          </div>
          <div>
            <h2 className="heading-md text-espresso mb-4">6. Cookies</h2>
            <p>Our website uses essential cookies to function and optional analytics cookies to help us improve your experience. You may decline non-essential cookies at any time via your browser settings.</p>
          </div>
          <div>
            <h2 className="heading-md text-espresso mb-4">7. Contact</h2>
            <p>For any privacy-related queries, please contact our Data Protection Officer at: privacy@beautylira.com or in writing at 12 Harley Street, London, W1G 9PQ.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
