import React, { useState } from "react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  schoolName: string;
  schoolAddress: string;
  schoolCity: string;
  schoolCountry: string;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    schoolName: "",
    schoolAddress: "",
    schoolCity: "",
    schoolCountry: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetModal = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      schoolName: "",
      schoolAddress: "",
      schoolCity: "",
      schoolCountry: "",
      accountType: "",
    });
    setIsSubmitted(false);
    setIsSubmitting(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>

        {/* Modal */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Join Our Waitlist
                  </h3>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  Get early access to StudyBud and transform your learning
                  experience with AI-powered insights.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john.doe@email.com"
                    />
                  </div>

                  {/* School Name */}
                  <div>
                    <label
                      htmlFor="schoolName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      School Name *
                    </label>
                    <input
                      type="text"
                      id="schoolName"
                      name="schoolName"
                      required
                      value={formData.schoolName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="University of California"
                    />
                  </div>

                  {/* School Address */}
                  <div>
                    <label
                      htmlFor="schoolAddress"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      School Address *
                    </label>
                    <input
                      type="text"
                      id="schoolAddress"
                      name="schoolAddress"
                      required
                      value={formData.schoolAddress}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="123 University Avenue"
                    />
                  </div>

                  {/* City and Country */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="schoolCity"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        City *
                      </label>
                      <input
                        type="text"
                        id="schoolCity"
                        name="schoolCity"
                        required
                        value={formData.schoolCity}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Los Angeles"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="schoolCountry"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Country *
                      </label>
                      <select
                        id="schoolCountry"
                        name="schoolCountry"
                        required
                        value={formData.schoolCountry}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="GB">United Kingdom</option>
                        <option value="AU">Australia</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                        <option value="IT">Italy</option>
                        <option value="ES">Spain</option>
                        <option value="NL">Netherlands</option>
                        <option value="SE">Sweden</option>
                        <option value="NO">Norway</option>
                        <option value="DK">Denmark</option>
                        <option value="FI">Finland</option>
                        <option value="CH">Switzerland</option>
                        <option value="AT">Austria</option>
                        <option value="BE">Belgium</option>
                        <option value="IE">Ireland</option>
                        <option value="NZ">New Zealand</option>
                        <option value="SG">Singapore</option>
                        <option value="JP">Japan</option>
                        <option value="KR">South Korea</option>
                        <option value="IN">India</option>
                        <option value="BR">Brazil</option>
                        <option value="MX">Mexico</option>
                        <option value="ZA">South Africa</option>
                        <option value="GH">Ghana</option>
                        <option value="NG">Nigeria</option>
                        <option value="KE">Kenya</option>
                        <option value="OTHER">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Account Type */}
                  <div>
                    <label
                      htmlFor="accountType"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Account Type *
                    </label>
                    <select
                      id="accountType"
                      name="accountType"
                      required
                      value={formData.accountType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Account Type</option>
                      <option value="student">Student</option>
                      <option value="teacher">Teacher</option>
                      <option value="admin">Administrator</option>
                    </select>
                  </div>
                </form>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Join Waitlist"
                  )}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            /* Thank You Message */
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                  Welcome to the Waitlist!
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Thank you for joining our waitlist! You'll soon receive an
                  email from our customer success manager who will assist you
                  with getting started and answer any questions you may have.
                </p>
                <p className="text-xs text-gray-500 mb-6">
                  We're excited to help transform your learning experience with
                  StudyBud's AI-powered insights.
                </p>
                <button
                  onClick={resetModal}
                  className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
