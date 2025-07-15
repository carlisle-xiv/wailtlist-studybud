import { useState } from "react";
import { Link } from "react-router-dom";
import WaitlistModal from "../components/WaitlistModal";

export default function Index() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 lg:px-20">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-6 flex items-center justify-center">
                <svg
                  width="30"
                  height="24"
                  viewBox="0 0 30 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 1.5C14.6203 1.5 14.2453 1.56562 13.8891 1.69219L0.740614 6.44062C0.295302 6.60469 -1.09092e-05 7.02656 -1.09092e-05 7.5C-1.09092e-05 7.97344 0.295302 8.39531 0.740614 8.55938L3.45468 9.53906C2.68593 10.7484 2.24999 12.1781 2.24999 13.6828V15C2.24999 16.3313 1.74374 17.7047 1.20468 18.7875C0.899989 19.3969 0.553114 19.9969 0.149989 20.55C-1.09076e-05 20.7516 -0.0421984 21.0141 0.0421766 21.2531C0.126552 21.4922 0.323427 21.6703 0.567177 21.7313L3.56718 22.4813C3.76405 22.5328 3.97499 22.4953 4.14843 22.3875C4.32186 22.2797 4.44374 22.1016 4.48124 21.9C4.88436 19.8938 4.6828 18.0938 4.3828 16.8047C4.2328 16.1391 4.03124 15.4594 3.74999 14.8359V13.6828C3.74999 12.2672 4.22811 10.9312 5.0578 9.8625C5.66249 9.13594 6.4453 8.55 7.36405 8.18906L14.7234 5.29688C15.1078 5.14687 15.5437 5.33437 15.6937 5.71875C15.8437 6.10313 15.6562 6.53906 15.2719 6.68906L7.91249 9.58125C7.33124 9.81094 6.8203 10.1625 6.40311 10.5938L13.8844 13.2938C14.2406 13.4203 14.6156 13.4859 14.9953 13.4859C15.375 13.4859 15.75 13.4203 16.1062 13.2938L29.2594 8.55938C29.7047 8.4 30 7.97344 30 7.5C30 7.02656 29.7047 6.60469 29.2594 6.44062L16.1109 1.69219C15.7547 1.56562 15.3797 1.5 15 1.5ZM5.99999 19.125C5.99999 20.7797 10.0312 22.5 15 22.5C19.9687 22.5 24 20.7797 24 19.125L23.2828 12.3094L16.6172 14.7188C16.0969 14.9062 15.5484 15 15 15C14.4516 15 13.8984 14.9062 13.3828 14.7188L6.71718 12.3094L5.99999 19.125Z"
                    fill="#3B82F6"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-studybud-gray-800">
                StudyBud
              </span>
            </div>

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
              <Link
                to="/teachers"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                For Teachers
              </Link>
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

            {/* Join Waitlist Button */}
            <div className="flex items-center">
              <button className="bg-studybud-blue-500 text-white px-6 py-2 rounded-lg hover:bg-studybud-blue-600 transition-colors font-semibold">
                Join Our Waitlist
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-5 lg:px-20 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Study <span className="text-studybud-blue-500">Smarter</span>,
                Improve, Excel.
              </h1>
              <p className="text-xl text-studybud-gray-600 leading-relaxed">
                AI-powered insights to help you identify gaps and build
                confidence for faster, smarter improvement.
              </p>
              <button className="bg-button-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all">
                Join Our Waitlist
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b9d87ff7096e7363cadcdab1ee73424662a96518?width=768"
                alt="StudyBud AI Dashboard"
                className="w-96 h-96 rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How StudyBud AI Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-studybud-gray-800 mb-4">
              How StudyBud Works
            </h2>
            <p className="text-xl text-studybud-gray-600">
              Three simple steps to transform your study experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-step-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.7625 1.01724C21.7359 -0.00932619 20.0766 -0.00932619 19.05 1.01724L17.6391 2.42349L22.2281 7.01255L23.6391 5.60161C24.6656 4.57505 24.6656 2.91567 23.6391 1.88911L22.7625 1.01724ZM8.7375 11.3297C8.45156 11.6157 8.23125 11.9672 8.10469 12.3563L6.71719 16.5188C6.58125 16.9219 6.68906 17.3672 6.98906 17.6719C7.28906 17.9766 7.73438 18.0797 8.14219 17.9438L12.3047 16.5563C12.6891 16.4297 13.0406 16.2094 13.3312 15.9235L21.1734 8.07661L16.5797 3.48286L8.7375 11.3297ZM5.15625 3.00005C2.67188 3.00005 0.65625 5.01567 0.65625 7.50005V19.5C0.65625 21.9844 2.67188 24 5.15625 24H17.1562C19.6406 24 21.6562 21.9844 21.6562 19.5V15C21.6562 14.1704 20.9859 13.5 20.1562 13.5C19.3266 13.5 18.6562 14.1704 18.6562 15V19.5C18.6562 20.3297 17.9859 21 17.1562 21H5.15625C4.32656 21 3.65625 20.3297 3.65625 19.5V7.50005C3.65625 6.67036 4.32656 6.00005 5.15625 6.00005H9.65625C10.4859 6.00005 11.1562 5.32974 11.1562 4.50005C11.1562 3.67036 10.4859 3.00005 9.65625 3.00005H5.15625Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-studybud-gray-800 mb-4">
                Take an Exam
              </h3>
              <p className="text-studybud-gray-600">
                Choose from hundreds of practice tests tailored to your course
                and difficulty level.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-step-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.98438 3C3.98438 2.17031 3.31406 1.5 2.48438 1.5C1.65469 1.5 0.984375 2.17031 0.984375 3V18.75C0.984375 20.8219 2.6625 22.5 4.73438 22.5H23.4844C24.3141 22.5 24.9844 21.8297 24.9844 21C24.9844 20.1703 24.3141 19.5 23.4844 19.5H4.73438C4.32188 19.5 3.98438 19.1625 3.98438 18.75V3ZM23.0438 7.05938C23.6297 6.47344 23.6297 5.52188 23.0438 4.93594C22.4578 4.35 21.5062 4.35 20.9203 4.93594L15.9844 9.87656L13.2938 7.18594C12.7078 6.6 11.7563 6.6 11.1703 7.18594L5.92031 12.4359C5.33438 13.0219 5.33438 13.9734 5.92031 14.5594C6.50625 15.1453 7.45781 15.1453 8.04375 14.5594L12.2344 10.3734L14.925 13.0641C15.5109 13.65 16.4625 13.65 17.0484 13.0641L23.0484 7.06406L23.0438 7.05938Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-studybud-gray-800 mb-4">
                Get an AI Report
              </h3>
              <p className="text-studybud-gray-600">
                Receive detailed analysis of your performance with AI-powered
                insights and recommendations.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-step-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.66875 18.0423L6.22031 16.5938C5.82187 16.1954 5.68125 15.6188 5.85937 15.0845C6 14.6673 6.1875 14.1235 6.4125 13.5001H1.45312C1.05 13.5001 0.675 13.2845 0.473437 12.9329C0.271875 12.5813 0.276562 12.1501 0.482812 11.8032L2.94375 7.65476C3.55312 6.6282 4.65469 6.00008 5.84531 6.00008H9.70312C9.81563 5.81258 9.92812 5.63914 10.0406 5.47039C13.8797 -0.192112 19.5984 -0.379612 23.0109 0.248513C23.5547 0.346951 23.9766 0.773513 24.0797 1.31726C24.7078 4.73445 24.5156 10.4485 18.8578 14.2876C18.6937 14.4001 18.5156 14.5126 18.3281 14.6251V18.4829C18.3281 19.6735 17.7 20.7798 16.6734 21.3845L12.525 23.8454C12.1781 24.0516 11.7469 24.0563 11.3953 23.8548C11.0438 23.6532 10.8281 23.2829 10.8281 22.8751V17.8501C10.1672 18.0798 9.59062 18.2673 9.15469 18.4079C8.62969 18.5766 8.05781 18.4313 7.66406 18.0423H7.66875ZM18.3281 7.87508C18.8254 7.87508 19.3023 7.67753 19.6539 7.3259C20.0056 6.97427 20.2031 6.49736 20.2031 6.00008C20.2031 5.50279 20.0056 5.02588 19.6539 4.67425C19.3023 4.32262 18.8254 4.12508 18.3281 4.12508C17.8308 4.12508 17.3539 4.32262 17.0023 4.67425C16.6507 5.02588 16.4531 5.50279 16.4531 6.00008C16.4531 6.49736 16.6507 6.97427 17.0023 7.3259C17.3539 7.67753 17.8308 7.87508 18.3281 7.87508Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-studybud-gray-800 mb-4">
                Improve with Insights
              </h3>
              <p className="text-studybud-gray-600">
                Follow personalized study plans and practice questions to boost
                your exam performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-studybud-gray-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-studybud-gray-800 mb-4">
              Powerful Features for Smart Learning
            </h2>
            <p className="text-xl text-studybud-gray-600">
              Everything you need to excel in your studies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-studybud-blue-background rounded-lg flex items-center justify-center mb-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.625 0C10.0734 0 11.25 1.17656 11.25 2.625V21.375C11.25 22.8234 10.0734 24 8.625 24C7.27031 24 6.15469 22.9734 6.01406 21.6516C5.77031 21.7172 5.5125 21.75 5.25 21.75C3.59531 21.75 2.25 20.4047 2.25 18.75C2.25 18.4031 2.31094 18.0656 2.41875 17.7562C1.00312 17.2219 0 15.8531 0 14.25C0 12.7547 0.876562 11.4609 2.14687 10.8609C1.73906 10.35 1.5 9.70312 1.5 9C1.5 7.56094 2.5125 6.36094 3.8625 6.06562C3.7875 5.80781 3.75 5.53125 3.75 5.25C3.75 3.84844 4.71563 2.66719 6.01406 2.33906C6.15469 1.02656 7.27031 0 8.625 0ZM15.375 0C16.7297 0 17.8406 1.02656 17.9859 2.33906C19.2891 2.66719 20.25 3.84375 20.25 5.25C20.25 5.53125 20.2125 5.80781 20.1375 6.06562C21.4875 6.35625 22.5 7.56094 22.5 9C22.5 9.70312 22.2609 10.35 21.8531 10.8609C23.1234 11.4609 24 12.7547 24 14.25C24 15.8531 22.9969 17.2219 21.5812 17.7562C21.6891 18.0656 21.75 18.4031 21.75 18.75C21.75 20.4047 20.4047 21.75 18.75 21.75C18.4875 21.75 18.2297 21.7172 17.9859 21.6516C17.8453 22.9734 16.7297 24 15.375 24C13.9266 24 12.75 22.8234 12.75 21.375V2.625C12.75 1.17656 13.9266 0 15.375 0Z"
                    fill="#3B82F6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-studybud-gray-800 mb-4">
                AI-Generated
                <br />
                Feedback
              </h3>
              <p className="text-studybud-gray-600">
                Get intelligent feedback on your answers with detailed
                explanations and improvement tips.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-studybud-cyan-background rounded-lg flex items-center justify-center mb-6">
                <svg
                  width="27"
                  height="24"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.75 11.25V0.778125C14.75 0.35625 15.0781 0 15.5 0C21.2984 0 26 4.70156 26 10.5C26 10.9219 25.6438 11.25 25.2219 11.25H14.75ZM2 12.75C2 7.06406 6.22344 2.35781 11.7031 1.60781C12.1344 1.54688 12.5 1.89375 12.5 2.32969V13.5L19.8359 20.8359C20.15 21.15 20.1266 21.6656 19.7656 21.9188C17.9281 23.2313 15.6781 24 13.25 24C7.03906 24 2 18.9656 2 12.75ZM26.675 13.5C27.1109 13.5 27.4531 13.8656 27.3969 14.2969C27.0359 16.9172 25.775 19.2469 23.9328 20.9672C23.6516 21.2297 23.2109 21.2109 22.9391 20.9344L15.5 13.5H26.675Z"
                    fill="#06B6D4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-studybud-gray-800 mb-4">
                Performance
                <br />
                Analysis
              </h3>
              <p className="text-studybud-gray-600">
                Track your progress across topics and identify areas that need
                more attention.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-studybud-purple-background rounded-lg flex items-center justify-center mb-6">
                <svg
                  width="18"
                  height="24"
                  viewBox="0 0 18 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.75 18C13.2 16.5047 14.1328 15.2297 15.0563 13.9594C15.3 13.6266 15.5438 13.2937 15.7781 12.9562C16.7063 11.6203 17.25 10.0031 17.25 8.25469C17.25 3.69375 13.5562 0 9 0C4.44375 0 0.75 3.69375 0.75 8.25C0.75 9.99844 1.29375 11.6203 2.22188 12.9516C2.45625 13.2891 2.7 13.6219 2.94375 13.9547C3.87187 15.225 4.80469 16.5047 5.25 17.9953H12.75V18ZM9 24C11.0719 24 12.75 22.3219 12.75 20.25V19.5H5.25V20.25C5.25 22.3219 6.92812 24 9 24ZM5.25 8.25C5.25 8.6625 4.9125 9 4.5 9C4.0875 9 3.75 8.6625 3.75 8.25C3.75 5.34844 6.09844 3 9 3C9.4125 3 9.75 3.3375 9.75 3.75C9.75 4.1625 9.4125 4.5 9 4.5C6.92812 4.5 5.25 6.17812 5.25 8.25Z"
                    fill="#8B5CF6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-studybud-gray-800 mb-4">
                Study Suggestions
              </h3>
              <p className="text-studybud-gray-600">
                Receive personalized study recommendations and practice
                questions based on your weaknesses.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-studybud-green-background rounded-lg flex items-center justify-center mb-6">
                <svg
                  width="30"
                  height="24"
                  viewBox="0 0 30 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 3C7.5 1.34531 8.84531 0 10.5 0H27C28.6547 0 30 1.34531 30 3V16.5C30 18.1547 28.6547 19.5 27 19.5H15.7875C15.2344 18.3047 14.3859 17.2734 13.3312 16.5H18V15C18 14.1703 18.6703 13.5 19.5 13.5H22.5C23.3297 13.5 24 14.1703 24 15V16.5H27V3H10.5V5.30156C9.61875 4.79063 8.59219 4.5 7.5 4.5V3ZM7.5 6C8.09095 6 8.67611 6.1164 9.22208 6.34254C9.76804 6.56869 10.2641 6.90016 10.682 7.31802C11.0998 7.73588 11.4313 8.23196 11.6575 8.77792C11.8836 9.32389 12 9.90905 12 10.5C12 11.0909 11.8836 11.6761 11.6575 12.2221C11.4313 12.768 11.0998 13.2641 10.682 13.682C10.2641 14.0998 9.76804 14.4313 9.22208 14.6575C8.67611 14.8836 8.09095 15 7.5 15C6.90905 15 6.32389 14.8836 5.77792 14.6575C5.23196 14.4313 4.73588 14.0998 4.31802 13.682C3.90016 13.2641 3.56869 12.768 3.34254 12.2221C3.1164 11.6761 3 11.0909 3 10.5C3 9.90905 3.1164 9.32389 3.34254 8.77792C3.56869 8.23196 3.90016 7.73588 4.31802 7.31802C4.73588 6.90016 5.23196 6.56869 5.77792 6.34254C6.32389 6.1164 6.90905 6 7.5 6ZM6.24844 16.5H8.74688C12.2016 16.5 15 19.2984 15 22.7484C15 23.4375 14.4422 24 13.7484 24H1.25156C0.557813 24 0 23.4422 0 22.7484C0 19.2984 2.79844 16.5 6.24844 16.5Z"
                    fill="#16A34A"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-studybud-gray-800 mb-4">
                Teacher-Created
                <br />
                Content
              </h3>
              <p className="text-studybud-gray-600">
                Access exams created by real teachers aligned with your course
                curriculum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Educators Section */}
      <section id="for-teachers" className="py-20 bg-educators-gradient">
        <div className="max-w-7xl mx-auto px-5 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white">For Educators</h2>
              <h3 className="text-2xl font-semibold text-white">
                Create Courses & Upload Your Syllabus
              </h3>
              <p className="text-xl text-white leading-relaxed">
                Empower your students with AI-driven insights. Create custom
                exams, track student progress, and provide personalized feedback
                at scale.
              </p>

              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z"
                      fill="#86EFAC"
                    />
                  </svg>
                  Easy course creation tools
                </li>
                <li className="flex items-center gap-3 text-white">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z"
                      fill="#86EFAC"
                    />
                  </svg>
                  Automated grading and feedback
                </li>
                <li className="flex items-center gap-3 text-white">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z"
                      fill="#86EFAC"
                    />
                  </svg>
                  Student progress analytics
                </li>
              </ul>

              <button className="bg-white text-studybud-blue-500 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all">
                Join Our Waitlist
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/17a98b832e1260ae6197738e858cafa369cdd7e1?width=768"
                alt="Teacher using StudyBud AI"
                className="w-96 h-96 rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-studybud-gray-800 mb-4">
              What Students Say
            </h2>
            <p className="text-xl text-studybud-gray-600">
              Join thousands of successful students
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-studybud-gray-50 p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-studybud-gray-800">
                    Sarah Chen
                  </h4>
                  <p className="text-sm text-studybud-gray-600">
                    Computer Science Major
                  </p>
                </div>
              </div>
              <p className="text-studybud-gray-700">
                "StudyBud AI helped me identify my weak areas in calculus. I
                improved my grade from C+ to A- in just one semester!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-studybud-gray-50 p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-studybud-gray-800">
                    Marcus Johnson
                  </h4>
                  <p className="text-sm text-studybud-gray-600">
                    Pre-Med Student
                  </p>
                </div>
              </div>
              <p className="text-studybud-gray-700">
                "The AI feedback is incredibly detailed. It's like having a
                personal tutor available 24/7. Game changer for MCAT prep!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-studybud-gray-50 p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-studybud-gray-800">
                    Emma Rodriguez
                  </h4>
                  <p className="text-sm text-studybud-gray-600">
                    High School Senior
                  </p>
                </div>
              </div>
              <p className="text-studybud-gray-700">
                "The personalized study plans saved me so much time. I knew
                exactly what to focus on for my SATs."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cta-gradient">
        <div className="max-w-4xl mx-auto px-5 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Study Experience?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of students who are already studying smarter with
            AI-powered insights.
          </p>

          <div className="flex justify-center">
            <button className="bg-white text-studybud-blue-500 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all">
              Join Our Waitlist
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-studybud-gray-50">
        <div className="max-w-4xl mx-auto px-5 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-studybud-gray-800">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-lg shadow-sm">
              <button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={() => toggleFaq(0)}
              >
                <h3 className="text-lg font-semibold text-studybud-gray-800">
                  How accurate is the AI feedback?
                </h3>
                <span className="text-2xl text-studybud-gray-400">
                  {expandedFaq === 0 ? "−" : "+"}
                </span>
              </button>
              {expandedFaq === 0 && (
                <div className="px-6 pb-6">
                  <p className="text-studybud-gray-600">
                    Our AI is trained on millions of student responses and
                    provides 95% accurate feedback, continuously improving with
                    each interaction.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-lg shadow-sm">
              <button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={() => toggleFaq(1)}
              >
                <h3 className="text-lg font-semibold text-studybud-gray-800">
                  Can I use this for any subject?
                </h3>
                <span className="text-2xl text-studybud-gray-400">
                  {expandedFaq === 1 ? "−" : "+"}
                </span>
              </button>
              {expandedFaq === 1 && (
                <div className="px-6 pb-6">
                  <p className="text-studybud-gray-600">
                    Yes! We support over 50 subjects including STEM, humanities,
                    languages, and professional certification exams.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white rounded-lg shadow-sm">
              <button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={() => toggleFaq(2)}
              >
                <h3 className="text-lg font-semibold text-studybud-gray-800">
                  Is there a mobile app?
                </h3>
                <span className="text-2xl text-studybud-gray-400">
                  {expandedFaq === 2 ? "−" : "+"}
                </span>
              </button>
              {expandedFaq === 2 && (
                <div className="px-6 pb-6">
                  <p className="text-studybud-gray-600">
                    Our platform is fully responsive and works perfectly on all
                    devices. Native mobile apps are coming soon!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-studybud-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-5 lg:px-20">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <svg
                  width="30"
                  height="24"
                  viewBox="0 0 30 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 1.5C14.6203 1.5 14.2453 1.56562 13.8891 1.69219L0.740614 6.44062C0.295302 6.60469 -1.09092e-05 7.02656 -1.09092e-05 7.5C-1.09092e-05 7.97344 0.295302 8.39531 0.740614 8.55938L3.45468 9.53906C2.68593 10.7484 2.24999 12.1781 2.24999 13.6828V15C2.24999 16.3313 1.74374 17.7047 1.20468 18.7875C0.899989 19.3969 0.553114 19.9969 0.149989 20.55C-1.09076e-05 20.7516 -0.0421984 21.0141 0.0421766 21.2531C0.126552 21.4922 0.323427 21.6703 0.567177 21.7313L3.56718 22.4813C3.76405 22.5328 3.97499 22.4953 4.14843 22.3875C4.32186 22.2797 4.44374 22.1016 4.48124 21.9C4.88436 19.8938 4.6828 18.0938 4.3828 16.8047C4.2328 16.1391 4.03124 15.4594 3.74999 14.8359V13.6828C3.74999 12.2672 4.22811 10.9312 5.0578 9.8625C5.66249 9.13594 6.4453 8.55 7.36405 8.18906L14.7234 5.29688C15.1078 5.14687 15.5437 5.33437 15.6937 5.71875C15.8437 6.10313 15.6562 6.53906 15.2719 6.68906L7.91249 9.58125C7.33124 9.81094 6.8203 10.1625 6.40311 10.5938L13.8844 13.2938C14.2406 13.4203 14.6156 13.4859 14.9953 13.4859C15.375 13.4859 15.75 13.4203 16.1062 13.2938L29.2594 8.55938C29.7047 8.4 30 7.97344 30 7.5C30 7.02656 29.7047 6.60469 29.2594 6.44062L16.1109 1.69219C15.7547 1.56562 15.3797 1.5 15 1.5ZM5.99999 19.125C5.99999 20.7797 10.0312 22.5 15 22.5C19.9687 22.5 24 20.7797 24 19.125L23.2828 12.3094L16.6172 14.7188C16.0969 14.9062 15.5484 15 15 15C14.4516 15 13.8984 14.9062 13.3828 14.7188L6.71718 12.3094L5.99999 19.125Z"
                    fill="#3B82F6"
                  />
                </svg>
                <span className="text-xl font-bold">StudyBud</span>
              </div>
              <p className="text-gray-400">
                Empowering students with AI-powered learning insights.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Demo
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
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
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.9441 6.42662C17.9568 6.60428 17.9568 6.78197 17.9568 6.95963C17.9568 12.3784 13.8325 18.6221 6.29441 18.6221C3.97207 18.6221 1.81473 17.9494 0 16.782C0.329961 16.82 0.647187 16.8327 0.989844 16.8327C2.90605 16.8327 4.67004 16.1855 6.07867 15.0815C4.27664 15.0434 2.76648 13.8632 2.24617 12.2388C2.5 12.2769 2.75379 12.3022 3.02031 12.3022C3.38832 12.3022 3.75637 12.2515 4.09898 12.1627C2.22082 11.7819 0.812148 10.1322 0.812148 8.13982V8.08908C1.35781 8.39365 1.99238 8.584 2.66492 8.60935C1.56086 7.8733 0.837539 6.61697 0.837539 5.19564C0.837539 4.43424 1.04055 3.73627 1.3959 3.12713C3.41367 5.61443 6.44668 7.23877 9.84766 7.41646C9.78422 7.11189 9.74613 6.79467 9.74613 6.4774C9.74613 4.2185 11.5736 2.37842 13.8451 2.37842C15.0253 2.37842 16.0913 2.87334 16.84 3.67283C17.7664 3.49518 18.6547 3.15252 19.4416 2.68299C19.137 3.63479 18.4898 4.43428 17.6395 4.94186C18.4644 4.85307 19.2639 4.62459 19.9999 4.30736C19.4416 5.11951 18.7436 5.84283 17.9441 6.42662Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6875 10.5C19.6875 5.14844 15.3516 0.8125 10 0.8125C4.64844 0.8125 0.3125 5.14844 0.3125 10.5C0.3125 15.3352 3.85508 19.343 8.48633 20.0703V13.3004H6.02539V10.5H8.48633V8.36562C8.48633 5.93789 9.93164 4.59687 12.1453 4.59687C13.2055 4.59687 14.3141 4.78594 14.3141 4.78594V7.16875H13.0922C11.8891 7.16875 11.5137 7.91562 11.5137 8.68164V10.5H14.2004L13.7707 13.3004H11.5137V20.0703C16.1449 19.343 19.6875 15.3352 19.6875 10.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    width="17.5"
                    height="20"
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.25 1.75H1.24609C0.558594 1.75 0 2.31641 0 3.01172V17.9883C0 18.6836 0.558594 19.25 1.24609 19.25H16.25C16.9375 19.25 17.5 18.6836 17.5 17.9883V3.01172C17.5 2.31641 16.9375 1.75 16.25 1.75ZM5.28906 16.75H2.69531V8.39844H5.29297V16.75H5.28906ZM3.99219 7.25781C3.16016 7.25781 2.48828 6.58203 2.48828 5.75391C2.48828 4.92578 3.16016 4.25 3.99219 4.25C4.82031 4.25 5.49609 4.92578 5.49609 5.75391C5.49609 6.58594 4.82422 7.25781 3.99219 7.25781ZM15.0117 16.75H12.418V12.6875C12.418 11.7188 12.3984 10.4727 11.0703 10.4727C9.71875 10.4727 9.51172 11.5273 9.51172 12.6172V16.75H6.91797V8.39844H9.40625V9.53906H9.44141C9.78906 8.88281 10.6367 8.19141 11.8984 8.19141C14.5234 8.19141 15.0117 9.92188 15.0117 12.1719V16.75Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    width="17.5"
                    height="20"
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.25391 6.00781C6.76953 6.00781 4.76562 8.01172 4.76562 10.4961C4.76562 12.9805 6.76953 14.9844 9.25391 14.9844C11.7383 14.9844 13.7422 12.9805 13.7422 10.4961C13.7422 8.01172 11.7383 6.00781 9.25391 6.00781ZM9.25391 13.4141C7.64844 13.4141 6.33594 12.1055 6.33594 10.4961C6.33594 8.88672 7.64453 7.57812 9.25391 7.57812C10.8633 7.57812 12.1719 8.88672 12.1719 10.4961C12.1719 12.1055 10.8594 13.4141 9.25391 13.4141ZM14.9727 5.82422C14.9727 6.40625 14.5039 6.87109 13.9258 6.87109C13.3438 6.87109 12.8789 6.40234 12.8789 5.82422C12.8789 5.24609 13.3477 4.77734 13.9258 4.77734C14.5039 4.77734 14.9727 5.24609 14.9727 5.82422ZM17.9453 6.88672C17.8789 5.48438 17.5586 4.24219 16.5312 3.21875C15.5078 2.19531 14.2656 1.875 12.8633 1.80469C11.418 1.72266 7.08594 1.72266 5.64062 1.80469C4.24219 1.87109 3 2.19141 1.97266 3.21484C0.945313 4.23828 0.628906 5.48047 0.558594 6.88281C0.476562 8.32812 0.476562 12.6602 0.558594 14.1055C0.625 15.5078 0.945313 16.75 1.97266 17.7734C3 18.7969 4.23828 19.1172 5.64062 19.1875C7.08594 19.2695 11.418 19.2695 12.8633 19.1875C14.2656 19.1211 15.5078 18.8008 16.5312 17.7734C17.5547 16.75 17.875 15.5078 17.9453 14.1055C18.0273 12.6602 18.0273 8.33203 17.9453 6.88672ZM16.0781 15.6562C15.7734 16.4219 15.1836 17.0117 14.4141 17.3203C13.2617 17.7773 10.5273 17.6719 9.25391 17.6719C7.98047 17.6719 5.24219 17.7734 4.09375 17.3203C3.32812 17.0156 2.73828 16.4258 2.42969 15.6562C1.97266 14.5039 2.07813 11.7695 2.07813 10.4961C2.07813 9.22266 1.97656 6.48438 2.42969 5.33594C2.73438 4.57031 3.32422 3.98047 4.09375 3.67187C5.24609 3.21484 7.98047 3.32031 9.25391 3.32031C10.5273 3.32031 13.2656 3.21875 14.4141 3.67187C15.1797 3.97656 15.7695 4.56641 16.0781 5.33594C16.5352 6.48828 16.4297 9.22266 16.4297 10.4961C16.4297 11.7695 16.5352 14.5078 16.0781 15.6562Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-studybud-gray-900 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 StudyBud AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
