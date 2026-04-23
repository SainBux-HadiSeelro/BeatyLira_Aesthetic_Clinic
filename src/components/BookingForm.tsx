"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const services = [
  "HIFU Skin Tightening",
  "Laser Treatment",
  "Endo Fibre Lift",
  "Dermal Fillers",
  "General Consultation",
];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16 px-8">
        <div className="w-16 h-16 border-2 border-rose-gold rounded-full flex items-center justify-center mx-auto mb-6">
          <Send size={20} className="text-rose-gold" />
        </div>
        <h3 className="heading-md mb-3">Thank You</h3>
        <p className="body-md max-w-sm mx-auto">
          We&apos;ve received your request. A member of our team will be in touch within 24 hours to confirm your appointment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="booking-name" className="field-label">Full Name *</label>
          <input
            id="booking-name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            className="field-lira"
          />
        </div>
        <div>
          <label htmlFor="booking-phone" className="field-label">Phone Number *</label>
          <input
            id="booking-phone"
            name="phone"
            type="tel"
            required
            placeholder="+44 7700 000000"
            value={formData.phone}
            onChange={handleChange}
            className="field-lira"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="booking-email" className="field-label">Email Address *</label>
          <input
            id="booking-email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            className="field-lira"
          />
        </div>
        <div>
          <label htmlFor="booking-service" className="field-label">Treatment *</label>
          <select
            id="booking-service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="field-lira"
          >
            <option value="">Select a treatment</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="booking-date" className="field-label">Preferred Date</label>
        <input
          id="booking-date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          className="field-lira"
        />
      </div>

      <div>
        <label htmlFor="booking-message" className="field-label">Additional Notes</label>
        <textarea
          id="booking-message"
          name="message"
          rows={4}
          placeholder="Tell us about your concerns or goals..."
          value={formData.message}
          onChange={handleChange}
          className="field-lira resize-none"
        />
      </div>

      <button type="submit" className="btn-primary w-full justify-center gap-3">
        Request Consultation
        <Send size={14} />
      </button>

      <p className="font-dm text-xs text-center text-warm-gray-light">
        By submitting you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-rose-gold">Privacy Policy</a>.
        We never share your data.
      </p>
    </form>
  );
}
