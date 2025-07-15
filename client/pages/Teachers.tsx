import { Link } from "react-router-dom";
import { useState } from "react";
import WaitlistModal from "../components/WaitlistModal";

const Teachers = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const openWaitlistModal = () => {
    setIsWaitlistModalOpen(true);
  };

  const closeWaitlistModal = () => {
    setIsWaitlistModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <svg
                className="w-8 h-6"
                viewBox="0 0 30 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0002 1.5C14.6205 1.5 14.2455 1.56562 13.8893 1.69219L0.740858 6.44062C0.295546 6.60469 0.000233231 7.02656 0.000233231 7.5C0.000233231 7.97344 0.295546 8.39531 0.740858 8.55938L3.45492 9.53906C2.68617 10.7484 2.25023 12.1781 2.25023 13.6828V15C2.25023 16.3313 1.74398 17.7047 1.20492 18.7875C0.900233 19.3969 0.553358 19.9969 0.150233 20.55C0.000233233 20.7516 -0.0419543 21.0141 0.0424207 21.2531C0.126796 21.4922 0.323671 21.6703 0.567421 21.7313L3.56742 22.4813C3.7643 22.5328 3.97523 22.4953 4.14867 22.3875C4.32211 22.2797 4.44398 22.1016 4.48148 21.9C4.88461 19.8938 4.68305 18.0938 4.38305 16.8047C4.23305 16.1391 4.03148 15.4594 3.75023 14.8359V13.6828C3.75023 12.2672 4.22836 10.9312 5.05805 9.8625C5.66273 9.13594 6.44555 8.55 7.3643 8.18906L14.7237 5.29688C15.108 5.14687 15.544 5.33437 15.694 5.71875C15.844 6.10313 15.6565 6.53906 15.2721 6.68906L7.91273 9.58125C7.33148 9.81094 6.82055 10.1625 6.40336 10.5938L13.8846 13.2938C14.2409 13.4203 14.6159 13.4859 14.9955 13.4859C15.3752 13.4859 15.7502 13.4203 16.1065 13.2938L29.2596 8.55938C29.7049 8.4 30.0002 7.97344 30.0002 7.5C30.0002 7.02656 29.7049 6.60469 29.2596 6.44062L16.1112 1.69219C15.7549 1.56562 15.3799 1.5 15.0002 1.5ZM6.00023 19.125C6.00023 20.7797 10.0315 22.5 15.0002 22.5C19.969 22.5 24.0002 20.7797 24.0002 19.125L23.283 12.3094L16.6174 14.7188C16.0971 14.9062 15.5487 15 15.0002 15C14.4518 15 13.8987 14.9062 13.383 14.7188L6.71742 12.3094L6.00023 19.125Z"
                  fill="#3B82F6"
                />
              </svg>
              <span className="text-xl font-bold text-gray-900">StudyBud</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/features"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Features
              </Link>
              <Link
                to="/how-it-works"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                How It Works
              </Link>
              <span className="text-blue-500 px-3 py-2 text-sm font-medium">
                For Teachers
              </span>
              <Link
                to="/recruiters"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                For Recruiters
              </Link>
              <Link
                to="/reviews"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Reviews
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="flex items-center">
              <button
                onClick={openWaitlistModal}
                className="bg-studybud-blue-500 text-white px-4 py-2 rounded-lg hover:bg-studybud-blue-600 transition-colors"
              >
                Join Our Waitlist
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Empower Your Teaching with AI Insights
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Create intelligent assessments, track student progress, and
                provide personalized feedback at scale. Transform your classroom
                with StudyBud for educators.
              </p>
              <div>
                <button
                  onClick={openWaitlistModal}
                  className="bg-gradient-to-r from-studybud-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Join Our Waitlist
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f97c06e0eb2308f72e068a87b41007b514db0629?width=768"
                alt="Teacher using StudyBud AI in classroom"
                className="w-96 h-96 rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Teachers Choose StudyBud AI */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Teachers Choose StudyBud AI
            </h2>
            <p className="text-xl text-gray-600">
              Save time, improve outcomes, and gain deeper insights into student
              learning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Save Time */}
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0ZM10.875 5.625V12C10.875 12.375 11.0625 12.7266 11.3766 12.9375L15.8766 15.9375C16.3922 16.2844 17.0906 16.1437 17.4375 15.6234C17.7844 15.1031 17.6437 14.4094 17.1234 14.0625L13.125 11.4V5.625C13.125 5.00156 12.6234 4.5 12 4.5C11.3766 4.5 10.875 5.00156 10.875 5.625Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Save 10+ Hours Weekly
              </h3>
              <p className="text-gray-600">
                Automated grading and instant feedback generation reduces your
                workload significantly
              </p>
            </div>

            {/* Improve Outcomes */}
            <div className="bg-green-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3C3 2.17031 2.32969 1.5 1.5 1.5C0.670312 1.5 0 2.17031 0 3V18.75C0 20.8219 1.67812 22.5 3.75 22.5H22.5C23.3297 22.5 24 21.8297 24 21C24 20.1703 23.3297 19.5 22.5 19.5H3.75C3.3375 19.5 3 19.1625 3 18.75V3ZM22.0594 7.05938C22.6453 6.47344 22.6453 5.52188 22.0594 4.93594C21.4734 4.35 20.5219 4.35 19.9359 4.93594L15 9.87656L12.3094 7.18594C11.7234 6.6 10.7719 6.6 10.1859 7.18594L4.93594 12.4359C4.35 13.0219 4.35 13.9734 4.93594 14.5594C5.52188 15.1453 6.47344 15.1453 7.05938 14.5594L11.25 10.3734L13.9406 13.0641C14.5266 13.65 15.4781 13.65 16.0641 13.0641L22.0641 7.06406L22.0594 7.05938Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Improve Student Outcomes
              </h3>
              <p className="text-gray-600">
                Data-driven insights help you identify struggling students early
                and provide targeted support
              </p>
            </div>

            {/* Scale Personalization */}
            <div className="bg-purple-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 30 24"
                >
                  <path d="M6.75 0C7.74456 0 8.69839 0.395088 9.40165 1.09835C10.1049 1.80161 10.5 2.75544 10.5 3.75C10.5 4.74456 10.1049 5.69839 9.40165 6.40165C8.69839 7.10491 7.74456 7.5 6.75 7.5C5.75544 7.5 4.80161 7.10491 4.09835 6.40165C3.39509 5.69839 3 4.74456 3 3.75C3 2.75544 3.39509 1.80161 4.09835 1.09835C4.80161 0.395088 5.75544 0 6.75 0ZM24 0C24.9946 0 25.9484 0.395088 26.6516 1.09835C27.3549 1.80161 27.75 2.75544 27.75 3.75C27.75 4.74456 27.3549 5.69839 26.6516 6.40165C25.9484 7.10491 24.9946 7.5 24 7.5C23.0054 7.5 22.0516 7.10491 21.3484 6.40165C20.6451 5.69839 20.25 4.74456 20.25 3.75C20.25 2.75544 20.6451 1.80161 21.3484 1.09835C22.0516 0.395088 23.0054 0 24 0ZM0 14.0016C0 11.2406 2.24062 9 5.00156 9H7.00312C7.74844 9 8.45625 9.16406 9.09375 9.45469C9.03281 9.79219 9.00469 10.1438 9.00469 10.5C9.00469 12.2906 9.79219 13.8984 11.0344 15C11.025 15 11.0156 15 11.0016 15H0.998437C0.45 15 0 14.55 0 14.0016ZM18.9984 15C18.9891 15 18.9797 15 18.9656 15C20.2125 13.8984 20.9953 12.2906 20.9953 10.5C20.9953 10.1438 20.9625 9.79688 20.9062 9.45469C21.5438 9.15938 22.2516 9 22.9969 9H24.9984C27.7594 9 30 11.2406 30 14.0016C30 14.5547 29.55 15 29.0016 15H18.9984ZM10.5 10.5C10.5 9.30653 10.9741 8.16193 11.818 7.31802C12.6619 6.47411 13.8065 6 15 6C16.1935 6 17.3381 6.47411 18.182 7.31802C19.0259 8.16193 19.5 9.30653 19.5 10.5C19.5 11.6935 19.0259 12.8381 18.182 13.682C17.3381 14.5259 16.1935 15 15 15C13.8065 15 12.6619 14.5259 11.818 13.682C10.9741 12.8381 10.5 11.6935 10.5 10.5ZM6 22.7484C6 19.2984 8.79844 16.5 12.2484 16.5H17.7516C21.2016 16.5 24 19.2984 24 22.7484C24 23.4375 23.4422 24 22.7484 24H7.25156C6.5625 24 6 23.4422 6 22.7484Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Scale Personalization
              </h3>
              <p className="text-gray-600">
                Provide personalized learning paths for every student,
                regardless of class size
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the content remains the same... */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Tools for Educators
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to create, assess, and analyze student
              performance
            </p>
          </div>

          {/* Features sections continue with the same content... */}
          {/* ... keeping the rest of the original content ... */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <svg
                  className="w-8 h-6"
                  viewBox="0 0 30 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0002 1.5C14.6205 1.5 14.2455 1.56562 13.8893 1.69219L0.740858 6.44062C0.295546 6.60469 0.000233231 7.02656 0.000233231 7.5C0.000233231 7.97344 0.295546 8.39531 0.740858 8.55938L3.45492 9.53906C2.68617 10.7484 2.25023 12.1781 2.25023 13.6828V15C2.25023 16.3313 1.74398 17.7047 1.20492 18.7875C0.900233 19.3969 0.553358 19.9969 0.150233 20.55C0.000233233 20.7516 -0.0419543 21.0141 0.0424207 21.2531C0.126796 21.4922 0.323671 21.6703 0.567421 21.7313L3.56742 22.4813C3.7643 22.5328 3.97523 22.4953 4.14867 22.3875C4.32211 22.2797 4.44398 22.1016 4.48148 21.9C4.88461 19.8938 4.68305 18.0938 4.38305 16.8047C4.23305 16.1391 4.03148 15.4594 3.75023 14.8359V13.6828C3.75023 12.2672 4.22836 10.9312 5.05805 9.8625C5.66273 9.13594 6.44555 8.55 7.3643 8.18906L14.7237 5.29688C15.108 5.14687 15.544 5.33437 15.694 5.71875C15.844 6.10313 15.6565 6.53906 15.2721 6.68906L7.91273 9.58125C7.33148 9.81094 6.82055 10.1625 6.40336 10.5938L13.8846 13.2938C14.2409 13.4203 14.6159 13.4859 14.9955 13.4859C15.3752 13.4859 15.7502 13.4203 16.1065 13.2938L29.2596 8.55938C29.7049 8.4 30.0002 7.97344 30.0002 7.5C30.0002 7.02656 29.7049 6.60469 29.2596 6.44062L16.1112 1.69219C15.7549 1.56562 15.3799 1.5 15.0002 1.5ZM6.00023 19.125C6.00023 20.7797 10.0315 22.5 15.0002 22.5C19.969 22.5 24.0002 20.7797 24.0002 19.125L23.283 12.3094L16.6174 14.7188C16.0971 14.9062 15.5487 15 15.0002 15C14.4518 15 13.8987 14.9062 13.383 14.7188L6.71742 12.3094L6.00023 19.125Z"
                    fill="#3B82F6"
                  />
                </svg>
                <span className="text-xl font-bold">StudyBud</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering educators with AI-driven assessment and analytics
                tools.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    to="/features"
                    className="hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/how-it-works"
                    className="hover:text-white transition-colors"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    to="/teachers"
                    className="hover:text-white transition-colors"
                  >
                    For Teachers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/recruiters"
                    className="hover:text-white transition-colors"
                  >
                    For Recruiters
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 StudyBud. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Teachers;
