import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "BeautyLira's terms and conditions for use of our website and services.",
};

export default function TermsPage() {
  return (
    <section className="pt-40 pb-24 bg-ivory">
      <div className="container-lira max-w-3xl mx-auto">
        <p className="section-label mb-4">Legal</p>
        <h1 className="heading-xl text-espresso mb-6">Terms of Service</h1>
        <p className="body-sm mb-10">Last updated: January 2025</p>

        <div className="space-y-10 body-lg">
          <div>
            <h2 className="heading-md text-espresso mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using the BeautyLira website and services, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.</p>
          </div>
          <div>
            <h2 className="heading-md text-espresso mb-4">2. Services</h2>
            <p>BeautyLira provides aesthetic medical treatments delivered by qualified healthcare professionals. All treatments are subject to a clinical consultation and assessment. We reserve the right to decline treatment where it is not clinically appropriate.</p>
          </div>
          <div>
            <h2 className="heading-md text-espresso mb-4">3. Booking & Cancellations</h2>
            <p>Appointments may be cancelled or rescheduled with a minimum of 48 hours notice. Late cancellations (less than 48 hours) may incur a £50 rebooking fee. No-shows may be charged the full consultation fee. We reserve the right to cancel appointments where clients fail to disclose relevant medical information.</p>
          </div>
          <div>
            <h2 className="heading-md text-espresso mb-4">4. Results & Liability</h2>
            <p>Aesthetic treatment results are not guaranteed and vary between individuals. We provide honest, evidence-based expectations during your consultation. BeautyLira is not liable for results that fall outside of agreed expectations where full disclosure was provided and procedures were carried out to the accepted standard of care.</p>
          </div>
          <div>
            <h2 className="heading-md text-espresso mb-4">5. Payments & Refunds</h2>
            <p>Payment is due at the time of treatment. We do not offer refunds on completed treatments. If you are unhappy with your results, please contact us — we are committed to finding a resolution in every case.</p>
          </div>
          <div>
            <h2 className="heading-md text-espresso mb-4">6. Website Use</h2>
            <p>The content on this website is provided for informational purposes only and does not constitute medical advice. You should always consult a qualified medical professional before undertaking any aesthetic treatment. Information on this site is subject to change without notice.</p>
          </div>
          <div>
            <h2 className="heading-md text-espresso mb-4">7. Contact</h2>
            <p>For any queries regarding these terms, please contact: hello@beautylira.com or write to us at 12 Harley Street, London, W1G 9PQ.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
