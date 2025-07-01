"use client"
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    preferredTime: "",
    agreeToContact: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim() === "" ? "Name is required" : "";
      case "phone":
        return value.trim() === "" ? "Phone is required" : "";
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value.trim() === "") return "Email is required";
        if (!emailRegex.test(value)) return "Invalid email address";
        return "";
      case "message":
        return value.trim() === "" ? "Please tell us what brings you here" : "";
      case "preferredTime":
        return value.trim() === "" ? "Preferred time is required" : "";
      case "agreeToContact":
        return !value ? "You must agree to be contacted" : "";
      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    return newErrors;
  };

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = () => {
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      console.log("Form submitted:", formData);
      setTimeout(() => {
        alert("Thank you for your message! We will be in touch soon.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          preferredTime: "",
          agreeToContact: false,
        });
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-[26rem]">
        <div className="bg-white rounded-2xl border-2 border-gray-300 p-6">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-teal-700 mb-2">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Simply fill out the brief fields below and Ellie will be in touch
              with you soon, usually within one business day. This form is safe,
              private, and completely free.
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Name"
                className={`w-full text-sm px-3 py-1 border rounded-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors ${
                  errors.name ? "border-red-500" : "border-black"
                }`}
              />
              {errors.name && (
                <div className="text-red-500 text-sm mt-1">{errors.name}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="you@example.com"
                className={`w-full text-sm px-3 py-1 border rounded-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors ${
                  errors.name ? "border-red-500" : "border-black"
                }`}
              />
              {errors.email && (
                <div className="text-red-500 text-sm mt-1">{errors.email}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="(555) 234-5678"
                className={`w-full text-sm px-3 py-1 border rounded-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors ${
                  errors.name ? "border-red-500" : "border-black"
                }`}
              />
              {errors.phone && (
                <div className="text-red-500 text-sm mt-1">{errors.phone}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                What brings you here?
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                rows="4"
                placeholder="How can I help you?"
                className={`w-full text-sm px-3 py-1 border rounded-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors ${
                  errors.name ? "border-red-500" : "border-black"
                }`}
              />
              {errors.message && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.message}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Preferred time to reach you
              </label>
              <input
                type="text"
                value={formData.preferredTime}
                onChange={(e) =>
                  handleInputChange("preferredTime", e.target.value)
                }
                placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
                className={`w-full  text-sm px-3 py-1 border rounded-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors ${
                  errors.name ? "border-red-500" : "border-black"
                }`}
              />
              <p className="text-sm text-gray-500 mt-1">
                Let us know when you're typically available for a call or
                consultation
              </p>
              {errors.preferredTime && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.preferredTime}
                </div>
              )}
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={formData.agreeToContact}
                onChange={(e) =>
                  handleInputChange("agreeToContact", e.target.checked)
                }
                className={`mt-1 w-5 h-5 text-teal-600 border-2 rounded focus:ring-teal-500 focus:ring-2 ${
                  errors.agreeToContact ? "border-red-500" : "border-gray-300"
                }`}
              />
              <div>
                <label className="text-sm text-gray-700 cursor-pointer">
                  I agree to be contacted by Ellie Shumaker regarding my inquiry
                </label>
                {errors.agreeToContact && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.agreeToContact}
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-teal-900 text-white py-1 px-6 rounded-sm font-semibold text-base hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            <div className="flex items-start space-x-2 text-sm text-gray-600 pt-2">
              <svg
                className="w-4 h-4 mt-0.5 text-teal-600 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <p>
                By clicking submit you consent to receive texts and emails from
                Ellie Shumaker
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}