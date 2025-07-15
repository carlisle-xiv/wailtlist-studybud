import React, { useState } from "react";
import { Link } from "react-router-dom";
import WaitlistModal from "../components/WaitlistModal";

export default function HowItWorks() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const openWaitlistModal = () => {
    setIsWaitlistModalOpen(true);
  };

  const closeWaitlistModal = () => {
    setIsWaitlistModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <svg
                className="w-8 h-6"
                viewBox="0 0 30 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 1.5C14.6203 1.5 14.2453 1.56562 13.8891 1.69219L0.740614 6.44062C0.295302 6.60469 -1.09092e-05 7.02656 -1.09092e-05 7.5C-1.09092e-05 7.97344 0.295302 8.39531 0.740614 8.55938L3.45468 9.53906C2.68593 10.7484 2.24999 12.1781 2.24999 13.6828V15C2.24999 16.3313 1.74374 17.7047 1.20468 18.7875C0.899989 19.3969 0.553114 19.9969 0.149989 20.55C-1.09076e-05 20.7516 -0.0421984 21.0141 0.0421766 21.2531C0.126552 21.4922 0.323427 21.6703 0.567177 21.7313L3.56718 22.4813C3.76405 22.5328 3.97499 22.4953 4.14843 22.3875C4.32186 22.2797 4.44374 22.1016 4.48124 21.9C4.88436 19.8938 4.6828 18.0938 4.3828 16.8047C4.2328 16.1391 4.03124 15.4594 3.74999 14.8359V13.6828C3.74999 12.2672 4.22811 10.9312 5.0578 9.8625C5.66249 9.13594 6.4453 8.55 7.36405 8.18906L14.7234 5.29688C15.1078 5.14687 15.5437 5.33437 15.6937 5.71875C15.8437 6.10313 15.6562 6.53906 15.2719 6.68906L7.91249 9.58125C7.33124 9.81094 6.8203 10.1625 6.40311 10.5938L13.8844 13.2938C14.2406 13.4203 14.6156 13.4859 14.9953 13.4859C15.375 13.4859 15.75 13.4203 16.1062 13.2938L29.2594 8.55938C29.7047 8.4 30 7.97344 30 7.5C30 7.02656 29.7047 6.60469 29.2594 6.44062L16.1109 1.69219C15.7547 1.56562 15.3797 1.5 15 1.5ZM5.99999 19.125C5.99999 20.7797 10.0312 22.5 15 22.5C19.9687 22.5 24 20.7797 24 19.125L23.2828 12.3094L16.6172 14.7188C16.0969 14.9062 15.5484 15 15 15C14.4516 15 13.8984 14.9062 13.3828 14.7188L6.71718 12.3094L5.99999 19.125Z"
                  fill="#3B82F6"
                />
              </svg>
              <span className="text-xl font-bold text-studybud-gray-800">
                StudyBud
              </span>
            </Link>

            <nav className="hidden md:flex space-x-8">
              <Link
                to="/features"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Features
              </Link>
              <span className="text-blue-500 px-3 py-2 text-sm font-medium">
                How It Works
              </span>
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
            </nav>

            <button
              onClick={openWaitlistModal}
              className="bg-studybud-blue-500 text-white px-6 py-2 rounded-lg hover:bg-studybud-blue-600 transition-colors font-semibold"
            >
              Join Our Waitlist
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 to-teal-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold text-studybud-gray-800 mb-6">
            How StudyBud Works
          </h1>
          <p className="text-xl text-studybud-gray-600 mb-8">
            Transform your study routine with AI-powered insights in just three
            simple steps. See how thousands of students are achieving better
            results.
          </p>
          <button
            onClick={openWaitlistModal}
            className="bg-button-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
          >
            Join Our Waitlist
          </button>
        </div>
      </section>

      {/* Three Steps to Success */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-studybud-gray-800 mb-4">
              Three Steps to Success
            </h2>
            <p className="text-xl text-studybud-gray-600">
              Our proven process that helps students improve their grades
            </p>
          </div>

          <div className="space-y-16">
            {/* Step 1: Take an AI-Powered Exam */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-studybud-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    1
                  </div>
                  <h3 className="text-3xl font-bold text-studybud-gray-800">
                    Take an AI-Powered Exam
                  </h3>
                </div>
                <p className="text-lg text-studybud-gray-600 mb-6">
                  Choose from thousands of practice exams created by real
                  teachers or let our AI generate custom questions based on your
                  curriculum and difficulty level.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z" />
                    </svg>
                    <span>Access to 10,000+ practice questions</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z" />
                    </svg>
                    <span>Questions adapted to your learning level</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z" />
                    </svg>
                    <span>Realistic exam timing and conditions</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/Exam shot 2.png"
                  alt="AI-Powered Exam Interface"
                  className="w-96 h-96 rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* Step 2: Get Your AI Report */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="flex justify-center lg:order-first">
                <img
                  src="/images/Results.png"
                  alt="AI Report Dashboard"
                  className="w-96 h-96 rounded-2xl shadow-xl"
                />
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-studybud-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    2
                  </div>
                  <h3 className="text-3xl font-bold text-studybud-gray-800">
                    Get Your AI Report
                  </h3>
                </div>
                <p className="text-lg text-studybud-gray-600 mb-6">
                  Receive instant, comprehensive feedback powered by advanced
                  AI. Our system analyzes every answer and provides detailed
                  explanations and insights.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z" />
                    </svg>
                    <span>Detailed explanations for every question</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z" />
                    </svg>
                    <span>Topic-level performance breakdown</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z" />
                    </svg>
                    <span>Strength and weakness identification</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3: Improve with Personalized Insights */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-studybud-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    3
                  </div>
                  <h3 className="text-3xl font-bold text-studybud-gray-800">
                    Improve with Personalized Insights
                  </h3>
                </div>
                <p className="text-lg text-studybud-gray-600 mb-6">
                  Follow your custom study plan with targeted practice
                  questions, learning resources, and progress tracking to
                  maximize your improvement.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z" />
                    </svg>
                    <span>Personalized study recommendations</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z" />
                    </svg>
                    <span>Adaptive practice questions</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z" />
                    </svg>
                    <span>Progress tracking and goal setting</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/Improve Plan.png"
                  alt="Personalized Study Insights Interface"
                  className="w-96 h-96 rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-studybud-gray-800 mb-4">
              Behind the Scenes
            </h2>
            <p className="text-xl text-studybud-gray-600">
              See how our AI technology works to help you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Answer Submission */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 5.12324V16.4998C13.5 17.3295 12.8297 17.9998 12 17.9998C11.1703 17.9998 10.5 17.3295 10.5 16.4998V5.12324L7.05938 8.56387C6.47344 9.14981 5.52188 9.14981 4.93594 8.56387C4.35 7.97793 4.35 7.02637 4.93594 6.44043L10.9359 0.44043C11.5219 -0.145508 12.4734 -0.145508 13.0594 0.44043L19.0594 6.44043C19.6453 7.02637 19.6453 7.97793 19.0594 8.56387C18.4734 9.14981 17.5219 9.14981 16.9359 8.56387L13.5 5.12324ZM3 16.4998H9C9 18.1545 10.3453 19.4998 12 19.4998C13.6547 19.4998 15 18.1545 15 16.4998H21C22.6547 16.4998 24 17.8451 24 19.4998V20.9998C24 22.6545 22.6547 23.9998 21 23.9998H3C1.34531 23.9998 0 22.6545 0 20.9998V19.4998C0 17.8451 1.34531 16.4998 3 16.4998ZM20.25 21.3748C20.5484 21.3748 20.8345 21.2563 21.0455 21.0453C21.2565 20.8343 21.375 20.5482 21.375 20.2498C21.375 19.9514 21.2565 19.6653 21.0455 19.4543C20.8345 19.2433 20.5484 19.1248 20.25 19.1248C19.9516 19.1248 19.6655 19.2433 19.4545 19.4543C19.2435 19.6653 19.125 19.9514 19.125 20.2498C19.125 20.5482 19.2435 20.8343 19.4545 21.0453C19.6655 21.2563 19.9516 21.3748 20.25 21.3748Z"
                    fill="#3B82F6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-studybud-gray-800 mb-2">
                Answer Submission
              </h3>
              <p className="text-sm text-studybud-gray-600">
                Your responses are securely processed by our AI engine
              </p>
            </div>

            {/* AI Analysis */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-6"
                  viewBox="0 0 30 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.461 6.34219C14.7938 6.04687 14.9251 5.58281 14.7516 5.17031C14.6438 4.92188 14.5266 4.67812 14.3954 4.44375L14.2501 4.19062C14.1094 3.95625 13.9547 3.72656 13.7907 3.50625C13.5235 3.15 13.0547 3.03281 12.6329 3.17344L11.311 3.60937C10.8094 3.19687 10.2329 2.85937 9.61411 2.62969L9.32817 1.27031C9.23911 0.834375 8.90161 0.4875 8.46099 0.435938C8.15161 0.39375 7.83755 0.375 7.5188 0.375H7.48599C7.16724 0.375 6.85318 0.39375 6.5438 0.43125C6.10318 0.482812 5.76568 0.834375 5.67661 1.26562L5.39068 2.62969C4.76724 2.86406 4.19536 3.19687 3.6938 3.60937L2.36724 3.17812C1.94536 3.0375 1.47661 3.15469 1.20942 3.51094C1.04536 3.73125 0.890675 3.96094 0.745363 4.19531L0.604737 4.44375C0.473487 4.67812 0.3563 4.92187 0.248488 5.175C0.07505 5.58281 0.2063 6.04687 0.539113 6.34687L1.57974 7.275C1.52817 7.58906 1.50005 7.91719 1.50005 8.25C1.50005 8.58281 1.52817 8.91094 1.57974 9.22969L0.539113 10.1578C0.2063 10.4531 0.07505 10.9172 0.248488 11.3297C0.3563 11.5781 0.473487 11.8219 0.604737 12.0609L0.745363 12.3047C0.885988 12.5437 1.04067 12.7687 1.20942 12.9891C1.47661 13.3453 1.94536 13.4625 2.36724 13.3219L3.68911 12.8859C4.19068 13.2984 4.76724 13.6359 5.38599 13.8656L5.67193 15.2297C5.76099 15.6656 6.09849 16.0125 6.53911 16.0641C6.85317 16.1016 7.17192 16.1203 7.49536 16.1203C7.8188 16.1203 8.13755 16.1016 8.45161 16.0641C8.89224 16.0125 9.22974 15.6609 9.3188 15.2297L9.60474 13.8656C10.2282 13.6312 10.8 13.2984 11.3016 12.8859L12.6235 13.3219C13.0454 13.4625 13.5141 13.3453 13.7813 12.9891C13.9454 12.7687 14.1 12.5437 14.2407 12.3047L14.386 12.0516C14.5172 11.8172 14.6344 11.5734 14.7422 11.325C14.9157 10.9172 14.7844 10.4531 14.4516 10.1531L13.411 9.225C13.4626 8.90625 13.4907 8.57812 13.4907 8.24531C13.4907 7.9125 13.4626 7.58437 13.411 7.26562L14.4516 6.3375L14.461 6.34219ZM5.25005 8.25C5.25005 7.65326 5.4871 7.08097 5.90906 6.65901C6.33102 6.23705 6.90331 6 7.50005 6C8.09679 6 8.66908 6.23705 9.09104 6.65901C9.513 7.08097 9.75005 7.65326 9.75005 8.25C9.75005 8.84674 9.513 9.41903 9.09104 9.84099C8.66908 10.2629 8.09679 10.5 7.50005 10.5C6.90331 10.5 6.33102 10.2629 5.90906 9.84099C5.4871 9.41903 5.25005 8.84674 5.25005 8.25ZM23.6579 23.4609C23.9532 23.7937 24.4172 23.925 24.8297 23.7516C25.0782 23.6437 25.3219 23.5266 25.5563 23.3953L25.8094 23.25C26.0438 23.1094 26.2735 22.9547 26.4938 22.7906C26.8501 22.5234 26.9672 22.0547 26.8266 21.6328L26.3907 20.3109C26.8032 19.8094 27.1407 19.2328 27.3704 18.6141L28.7344 18.3281C29.1704 18.2391 29.5172 17.9016 29.5688 17.4609C29.6063 17.1469 29.625 16.8281 29.625 16.5047C29.625 16.1812 29.6063 15.8625 29.5688 15.5484C29.5172 15.1078 29.1657 14.7703 28.7344 14.6812L27.3704 14.3906C27.136 13.7672 26.8032 13.1953 26.3907 12.6937L26.8266 11.3719C26.9672 10.95 26.8501 10.4812 26.4938 10.2141C26.2735 10.05 26.0438 9.89531 25.8094 9.75L25.561 9.60937C25.3266 9.47812 25.0829 9.36094 24.8297 9.25312C24.4219 9.07969 23.9579 9.21094 23.6579 9.54375L22.7297 10.5844C22.411 10.5328 22.0829 10.5047 21.75 10.5047C21.4172 10.5047 21.0891 10.5328 20.7704 10.5844L19.8422 9.54375C19.5469 9.21094 19.0829 9.07969 18.6704 9.25312C18.4219 9.36094 18.1782 9.47812 17.9391 9.60937L17.6954 9.75C17.4563 9.89062 17.2313 10.0453 17.011 10.2141C16.6547 10.4812 16.5375 10.95 16.6782 11.3719L17.1141 12.6937C16.7016 13.1953 16.3641 13.7719 16.1344 14.3906L14.7704 14.6719C14.3344 14.7609 13.9875 15.0984 13.936 15.5391C13.8985 15.8531 13.8797 16.1719 13.8797 16.4953C13.8797 16.8187 13.8985 17.1375 13.936 17.4516C13.9875 17.8922 14.3391 18.2297 14.7704 18.3187L16.1344 18.6047C16.3688 19.2281 16.7016 19.8 17.1141 20.3016L16.6782 21.6234C16.5375 22.0453 16.6547 22.5141 17.011 22.7812C17.2313 22.9453 17.4563 23.1 17.6954 23.2406L17.9485 23.3859C18.1829 23.5172 18.4266 23.6344 18.6751 23.7422C19.0829 23.9156 19.5469 23.7844 19.8469 23.4516L20.7751 22.4109C21.0938 22.4625 21.4219 22.4906 21.7547 22.4906C22.0876 22.4906 22.4157 22.4625 22.7344 22.4109L23.6625 23.4516L23.6579 23.4609ZM21.75 14.25C22.0455 14.25 22.3381 14.3082 22.6111 14.4213C22.8841 14.5343 23.1321 14.7001 23.341 14.909C23.55 15.1179 23.7157 15.366 23.8288 15.639C23.9419 15.9119 24 16.2045 24 16.5C24 16.7955 23.9419 17.0881 23.8288 17.361C23.7157 17.634 23.55 17.8821 23.341 18.091C23.1321 18.2999 22.8841 18.4657 22.6111 18.5787C22.3381 18.6918 22.0455 18.75 21.75 18.75C21.4546 18.75 21.162 18.6918 20.889 18.5787C20.616 18.4657 20.368 18.2999 20.1591 18.091C19.9501 17.8821 19.7844 17.634 19.6713 17.361C19.5582 17.0881 19.5 16.7955 19.5 16.5C19.5 16.2045 19.5582 15.9119 19.6713 15.639C19.7844 15.366 19.9501 15.1179 20.1591 14.909C20.368 14.7001 20.616 14.5343 20.889 14.4213C21.162 14.3082 21.4546 14.25 21.75 14.25Z"
                    fill="#16A34A"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-studybud-gray-800 mb-2">
                AI Analysis
              </h3>
              <p className="text-sm text-studybud-gray-600">
                Advanced algorithms analyze patterns and identify learning gaps
              </p>
            </div>

            {/* Report Generation */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 1.5C2.32969 1.5 3 2.17031 3 3V18.75C3 19.1625 3.3375 19.5 3.75 19.5H22.5C23.3297 19.5 24 20.1703 24 21C24 21.8297 23.3297 22.5 22.5 22.5H3.75C1.67812 22.5 0 20.8219 0 18.75V3C0 2.17031 0.670312 1.5 1.5 1.5ZM6 6C6 5.17031 6.67031 4.5 7.5 4.5H16.5C17.3297 4.5 18 5.17031 18 6C18 6.82969 17.3297 7.5 16.5 7.5H7.5C6.67031 7.5 6 6.82969 6 6ZM7.5 9H13.5C14.3297 9 15 9.67031 15 10.5C15 11.3297 14.3297 12 13.5 12H7.5C6.67031 12 6 11.3297 6 10.5C6 9.67031 6.67031 9 7.5 9ZM7.5 13.5H19.5C20.3297 13.5 21 14.1703 21 15C21 15.8297 20.3297 16.5 19.5 16.5H7.5C6.67031 16.5 6 15.8297 6 15C6 14.1703 6.67031 13.5 7.5 13.5Z"
                    fill="#CA8A04"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-studybud-gray-800 mb-2">
                Report Generation
              </h3>
              <p className="text-sm text-studybud-gray-600">
                Comprehensive insights are compiled into actionable reports
              </p>
            </div>

            {/* Study Path */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 4.5C24 6.85313 21.2297 10.3641 20.0344 11.7656C19.8562 11.9719 19.5938 12.0516 19.3547 12H15C14.1703 12 13.5 12.6703 13.5 13.5C13.5 14.3297 14.1703 15 15 15H19.5C21.9844 15 24 17.0156 24 19.5C24 21.9844 21.9844 24 19.5 24H6.54375C6.95156 23.5359 7.44844 22.9406 7.95 22.275C8.24531 21.8813 8.55 21.45 8.84063 21H19.5C20.3297 21 21 20.3297 21 19.5C21 18.6703 20.3297 18 19.5 18H15C12.5156 18 10.5 15.9844 10.5 13.5C10.5 11.0156 12.5156 9 15 9H16.8656C15.8812 7.52344 15 5.82656 15 4.5C15 2.01562 17.0156 0 19.5 0C21.9844 0 24 2.01562 24 4.5ZM5.48906 22.9266C5.31094 23.1281 5.15156 23.3062 5.01562 23.4562L4.93125 23.55L4.92188 23.5406C4.64062 23.7563 4.2375 23.7281 3.98438 23.4562C2.80312 22.1719 0 18.8672 0 16.5C0 14.0156 2.01562 12 4.5 12C6.98438 12 9 14.0156 9 16.5C9 17.9062 8.01094 19.6406 6.96094 21.0891C6.45937 21.7781 5.94375 22.4016 5.51719 22.8937L5.48906 22.9266ZM6 16.5C6 16.1022 5.84196 15.7206 5.56066 15.4393C5.27936 15.158 4.89782 15 4.5 15C4.10218 15 3.72064 15.158 3.43934 15.4393C3.15804 15.7206 3 16.1022 3 16.5C3 16.8978 3.15804 17.2794 3.43934 17.5607C3.72064 17.842 4.10218 18 4.5 18C4.89782 18 5.27936 17.842 5.56066 17.5607C5.84196 17.2794 6 16.8978 6 16.5ZM19.5 6C19.8978 6 20.2794 5.84196 20.5607 5.56066C20.842 5.27936 21 4.89782 21 4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3C19.1022 3 18.7206 3.15804 18.4393 3.43934C18.158 3.72064 18 4.10218 18 4.5C18 4.89782 18.158 5.27936 18.4393 5.56066C18.7206 5.84196 19.1022 6 19.5 6Z"
                    fill="#8B5CF6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-studybud-gray-800 mb-2">
                Study Path
              </h3>
              <p className="text-sm text-studybud-gray-600">
                Personalized learning paths are created for optimal progress
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Learning Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-studybud-gray-800 mb-4">
              Your Learning Journey
            </h2>
            <p className="text-xl text-studybud-gray-600">
              Track your progress from first test to exam success
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-300"></div>

            <div className="space-y-12">
              {/* Day 1 */}
              <div className="flex items-start">
                <div className="w-16 h-16 bg-studybud-blue-500 rounded-full flex items-center justify-center text-white mr-8 relative z-10">
                  <svg className="w-4 h-5" viewBox="0 0 16 21" fill="none">
                    <path
                      d="M3.35156 2.02325C2.77344 1.66778 2.04688 1.65606 1.45703 1.98809C0.867188 2.32012 0.5 2.94512 0.5 3.62481V17.3748C0.5 18.0545 0.867188 18.6795 1.45703 19.0115C2.04688 19.3436 2.77344 19.3279 3.35156 18.9764L14.6016 12.1014C15.1602 11.7615 15.5 11.1561 15.5 10.4998C15.5 9.84356 15.1602 9.242 14.6016 8.89825L3.35156 2.02325Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-studybud-gray-800 mb-2">
                    Day 1: Take Your First Test
                  </h3>
                  <p className="text-studybud-gray-600">
                    Start with a diagnostic exam to establish your baseline
                    performance
                  </p>
                </div>
              </div>

              {/* Week 1 */}
              <div className="flex items-start">
                <div className="w-16 h-16 bg-studybud-cyan-500 rounded-full flex items-center justify-center text-white mr-8 relative z-10">
                  <svg className="w-5 h-5" viewBox="0 0 20 21" fill="none">
                    <path
                      d="M2.5 3C2.5 2.30859 1.94141 1.75 1.25 1.75C0.558594 1.75 0 2.30859 0 3V16.125C0 17.8516 1.39844 19.25 3.125 19.25H18.75C19.4414 19.25 20 18.6914 20 18C20 17.3086 19.4414 16.75 18.75 16.75H3.125C2.78125 16.75 2.5 16.4688 2.5 16.125V3ZM18.3828 6.38281C18.8711 5.89453 18.8711 5.10156 18.3828 4.61328C17.8945 4.125 17.1016 4.125 16.6133 4.61328L12.5 8.73047L10.2578 6.48828C9.76953 6 8.97656 6 8.48828 6.48828L4.11328 10.8633C3.625 11.3516 3.625 12.1445 4.11328 12.6328C4.60156 13.1211 5.39453 13.1211 5.88281 12.6328L9.375 9.14453L11.6172 11.3867C12.1055 11.875 12.8984 11.875 13.3867 11.3867L18.3867 6.38672L18.3828 6.38281Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-studybud-gray-800 mb-2">
                    Week 1: Analyze & Plan
                  </h3>
                  <p className="text-studybud-gray-600">
                    Review your AI report and begin following your personalized
                    study plan
                  </p>
                </div>
              </div>

              {/* Week 2-4 */}
              <div className="flex items-start">
                <div className="w-16 h-16 bg-studybud-green-500 rounded-full flex items-center justify-center text-white mr-8 relative z-10">
                  <svg className="w-5 h-5" viewBox="0 0 20 21" fill="none">
                    <path
                      d="M6.11328 17.9883L5.62109 19.1406C4.89062 18.7695 4.21875 18.3125 3.60938 17.7773L4.49609 16.8906C4.98438 17.3164 5.52734 17.6875 6.11328 17.9883ZM1.58594 11.125H0.332031C0.386719 11.9531 0.542969 12.7539 0.789063 13.5117L1.95312 13.0469C1.76172 12.4336 1.63281 11.7891 1.58594 11.125ZM1.58594 9.875C1.64062 9.14062 1.78906 8.42969 2.01953 7.76172L0.867188 7.26953C0.574219 8.08984 0.390625 8.96484 0.332031 9.875H1.58594ZM2.51172 6.61328C2.81641 6.03125 3.18359 5.48828 3.60938 4.99219L2.72266 4.10547C2.1875 4.71484 1.72656 5.38672 1.35938 6.11719L2.51172 6.61328ZM15.5078 16.8906C14.9648 17.3594 14.3594 17.7617 13.707 18.0781L14.1719 19.2422C14.9805 18.8555 15.7266 18.3594 16.3945 17.7734L15.5078 16.8906ZM4.49219 4.10938C5.03516 3.64062 5.64062 3.23828 6.29297 2.92188L5.82812 1.75781C5.01953 2.14453 4.27344 2.64063 3.60938 3.22656L4.49219 4.10938ZM17.4883 14.3867C17.1836 14.9688 16.8164 15.5117 16.3906 16.0078L17.2773 16.8945C17.8125 16.2852 18.2734 15.6094 18.6406 14.8828L17.4883 14.3867ZM18.4141 11.125C18.3594 11.8594 18.2109 12.5703 17.9805 13.2383L19.1328 13.7305C19.4258 12.9062 19.6094 12.0312 19.6641 11.1211H18.4141V11.125ZM12.5469 18.5469C11.9336 18.7422 11.2891 18.8672 10.625 18.9141V20.168C11.4531 20.1133 12.2539 19.957 13.0117 19.7109L12.5469 18.5469ZM9.375 18.9141C8.64062 18.8594 7.92969 18.7109 7.26172 18.4805L6.76953 19.6328C7.59375 19.9258 8.46875 20.1094 9.37891 20.1641V18.9141H9.375ZM18.0469 7.95312C18.2422 8.56641 18.3672 9.21094 18.4141 9.875H19.668C19.6133 9.04688 19.457 8.24609 19.2109 7.48828L18.0469 7.95312ZM3.60938 16.0078C3.14062 15.4648 2.73828 14.8594 2.42188 14.207L1.25781 14.6719C1.64453 15.4805 2.14063 16.2266 2.72656 16.8945L3.60938 16.0078ZM10.625 2.08594C11.3594 2.14062 12.0664 2.28906 12.7383 2.51953L13.2305 1.36719C12.4102 1.07422 11.5352 0.890625 10.625 0.832031V2.08594ZM7.45312 2.45312C8.06641 2.25781 8.71094 2.13281 9.375 2.08594V0.832031C8.54688 0.886719 7.74609 1.04297 6.98828 1.28906L7.45312 2.45312ZM17.2773 4.10547L16.3906 4.99219C16.8594 5.53516 17.2617 6.14062 17.582 6.79297L18.7461 6.32812C18.3594 5.51953 17.8633 4.77344 17.2773 4.10547ZM15.5078 4.10938L16.3945 3.22266C15.7852 2.6875 15.1133 2.22656 14.3828 1.85938L13.8906 3.01172C14.4688 3.31641 15.0156 3.68359 15.5078 4.10938Z"
                      fill="white"
                    />
                    <path
                      d="M10 15.8125C10.6041 15.8125 11.0938 15.3228 11.0938 14.7188C11.0938 14.1147 10.6041 13.625 10 13.625C9.39594 13.625 8.90625 14.1147 8.90625 14.7188C8.90625 15.3228 9.39594 15.8125 10 15.8125Z"
                      fill="white"
                    />
                    <path
                      d="M10.3007 12.6875H9.67574C9.41793 12.6875 9.20699 12.4766 9.20699 12.2188C9.20699 9.44531 12.2304 9.72266 12.2304 8.00781C12.2304 7.22656 11.5351 6.4375 9.98824 6.4375C8.85153 6.4375 8.25778 6.8125 7.67574 7.55859C7.5234 7.75391 7.24215 7.79297 7.04293 7.65234L6.53121 7.29297C6.31246 7.14062 6.26168 6.83203 6.42965 6.62109C7.25778 5.55859 8.24215 4.875 9.99215 4.875C12.0351 4.875 13.7968 6.03906 13.7968 8.00781C13.7968 10.6484 10.7734 10.4883 10.7734 12.2188C10.7695 12.4766 10.5586 12.6875 10.3007 12.6875Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-studybud-gray-800 mb-2">
                    Week 2-4: Focused Practice
                  </h3>
                  <p className="text-studybud-gray-600">
                    Work on weak areas with targeted questions and track
                    improvement
                  </p>
                </div>
              </div>

              {/* Exam Day */}
              <div className="flex items-start">
                <div className="w-16 h-16 bg-studybud-purple-500 rounded-full flex items-center justify-center text-white mr-8 relative z-10">
                  <svg className="w-6 h-5" viewBox="0 0 24 21" fill="none">
                    <path
                      d="M16.375 0.5H7.625C6.58984 0.5 5.74609 1.35156 5.78516 2.38281C5.79297 2.58984 5.80078 2.79688 5.8125 3H1.6875C1.16797 3 0.75 3.41797 0.75 3.9375C0.75 7.55469 2.05859 10.0703 3.81641 11.7773C5.54688 13.4609 7.65625 14.3086 9.21094 14.7383C10.125 14.9922 10.75 15.7539 10.75 16.5195C10.75 17.3359 10.0859 18 9.26953 18H8.25C7.55859 18 7 18.5586 7 19.25C7 19.9414 7.55859 20.5 8.25 20.5H15.75C16.4414 20.5 17 19.9414 17 19.25C17 18.5586 16.4414 18 15.75 18H14.7305C13.9141 18 13.25 17.3359 13.25 16.5195C13.25 15.7539 13.8711 14.9883 14.7891 14.7383C16.3477 14.3086 18.457 13.4609 20.1875 11.7773C21.9414 10.0703 23.25 7.55469 23.25 3.9375C23.25 3.41797 22.832 3 22.3125 3H18.1875C18.1992 2.79688 18.207 2.59375 18.2148 2.38281C18.2539 1.35156 17.4102 0.5 16.375 0.5ZM2.66016 4.875H5.95703C6.3125 8.39453 7.09766 10.7461 7.98438 12.3203C7.01172 11.8906 6 11.2852 5.125 10.4336C3.875 9.21875 2.85938 7.46484 2.66406 4.875H2.66016ZM18.8789 10.4336C18.0039 11.2852 16.9922 11.8906 16.0195 12.3203C16.9062 10.7461 17.6914 8.39453 18.0469 4.875H21.3438C21.1445 7.46484 20.1289 9.21875 18.8828 10.4336H18.8789Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-studybud-gray-800 mb-2">
                    Exam Day: Achieve Success
                  </h3>
                  <p className="text-studybud-gray-600">
                    Feel confident and prepared with comprehensive practice and
                    insights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Results */}
      <section className="py-20 bg-gradient-to-r from-studybud-blue-500 to-studybud-cyan-500">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">Proven Results</h2>
          <p className="text-xl text-blue-100 mb-12">
            See the impact StudyBud has on student performance
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">89%</div>
              <div className="text-blue-100">Grade Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">2.3x</div>
              <div className="text-blue-100">Faster Learning</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-100">Student Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-blue-100">Success Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-studybud-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-studybud-gray-600">
              Everything you need to know about how StudyBud works
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How accurate is the AI feedback?",
                answer:
                  "Our AI has been trained on millions of student responses and achieves 95% accuracy in identifying learning gaps and providing relevant feedback.",
              },
              {
                question: "How long does it take to see results?",
                answer:
                  "Most students see improvement within 2-3 weeks of consistent practice. Our data shows an average grade increase of 1.5 letter grades within a month.",
              },
              {
                question: "Can I use StudyBud for any subject?",
                answer:
                  "Yes! We support over 50 subjects including STEM, humanities, languages, and professional certifications. Our AI adapts to each subject's unique requirements.",
              },
              {
                question: "Is my data secure and private?",
                answer:
                  "Absolutely. We use enterprise-grade encryption and never share your personal data. Your study progress and performance data is completely private.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-studybud-gray-800">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-studybud-gray-600 transform transition-transform ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 9-7 7-7-7"
                    />
                  </svg>
                </div>
                {expandedFaq === index && (
                  <p className="mt-4 text-studybud-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-studybud-gray-800 mb-6">
            Ready to Transform Your Study Routine?
          </h2>
          <p className="text-xl text-studybud-gray-600 mb-8">
            Join thousands of students who are already achieving better results
            with StudyBud
          </p>
          <button
            onClick={openWaitlistModal}
            className="bg-button-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all mr-4"
          >
            Join Our Waitlist
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-studybud-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <svg
                  className="w-8 h-6"
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
              <p className="text-gray-300">
                Empowering students with AI-powered learning insights.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link to="/features" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-white">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link to="/" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-white">
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 21"
                  >
                    <path d="M17.9441 6.42662C17.9568 6.60428 17.9568 6.78197 17.9568 6.95963C17.9568 12.3784 13.8325 18.6221 6.29441 18.6221C3.97207 18.6221 1.81473 17.9494 0 16.782C0.329961 16.82 0.647187 16.8327 0.989844 16.8327C2.90605 16.8327 4.67004 16.1855 6.07867 15.0815C4.27664 15.0434 2.76648 13.8632 2.24617 12.2388C2.5 12.2769 2.75379 12.3022 3.02031 12.3022C3.38832 12.3022 3.75637 12.2515 4.09898 12.1627C2.22082 11.7819 0.812148 10.1322 0.812148 8.13982V8.08908C1.35781 8.39365 1.99238 8.584 2.66492 8.60935C1.56086 7.8733 0.837539 6.61697 0.837539 5.19564C0.837539 4.43424 1.04055 3.73627 1.3959 3.12713C3.41367 5.61443 6.44668 7.23877 9.84766 7.41646C9.78422 7.11189 9.74613 6.79467 9.74613 6.4774C9.74613 4.2185 11.5736 2.37842 13.8451 2.37842C15.0253 2.37842 16.0913 2.87334 16.84 3.67283C17.7664 3.49518 18.6547 3.15252 19.4416 2.68299C19.137 3.63479 18.4898 4.43428 17.6395 4.94186C18.4644 4.85307 19.2639 4.62459 19.9999 4.30736C19.4416 5.11951 18.7436 5.84283 17.9441 6.42662Z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 21"
                  >
                    <path d="M19.6875 10.5C19.6875 5.14844 15.3516 0.8125 10 0.8125C4.64844 0.8125 0.3125 5.14844 0.3125 10.5C0.3125 15.3352 3.85508 19.343 8.48633 20.0703V13.3004H6.02539V10.5H8.48633V8.36562C8.48633 5.93789 9.93164 4.59687 12.1453 4.59687C13.2055 4.59687 14.3141 4.78594 14.3141 4.78594V7.16875H13.0922C11.8891 7.16875 11.5137 7.91562 11.5137 8.68164V10.5H14.2004L13.7707 13.3004H11.5137V20.0703C16.1449 19.343 19.6875 15.3352 19.6875 10.5Z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                  >
                    <path d="M16.25 1.75H1.24609C0.558594 1.75 0 2.31641 0 3.01172V17.9883C0 18.6836 0.558594 19.25 1.24609 19.25H16.25C16.9375 19.25 17.5 18.6836 17.5 17.9883V3.01172C17.5 2.31641 16.9375 1.75 16.25 1.75ZM5.28906 16.75H2.69531V8.39844H5.29297V16.75H5.28906ZM3.99219 7.25781C3.16016 7.25781 2.48828 6.58203 2.48828 5.75391C2.48828 4.92578 3.16016 4.25 3.99219 4.25C4.82031 4.25 5.49609 4.92578 5.49609 5.75391C5.49609 6.58594 4.82422 7.25781 3.99219 7.25781ZM15.0117 16.75H12.418V12.6875C12.418 11.7188 12.3984 10.4727 11.0703 10.4727C9.71875 10.4727 9.51172 11.5273 9.51172 12.6172V16.75H6.91797V8.39844H9.40625V9.53906H9.44141C9.78906 8.88281 10.6367 8.19141 11.8984 8.19141C14.5234 8.19141 15.0117 9.92188 15.0117 12.1719V16.75Z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                  >
                    <path d="M9.25391 6.00781C6.76953 6.00781 4.76562 8.01172 4.76562 10.4961C4.76562 12.9805 6.76953 14.9844 9.25391 14.9844C11.7383 14.9844 13.7422 12.9805 13.7422 10.4961C13.7422 8.01172 11.7383 6.00781 9.25391 6.00781ZM9.25391 13.4141C7.64844 13.4141 6.33594 12.1055 6.33594 10.4961C6.33594 8.88672 7.64453 7.57812 9.25391 7.57812C10.8633 7.57812 12.1719 8.88672 12.1719 10.4961C12.1719 12.1055 10.8594 13.4141 9.25391 13.4141ZM14.9727 5.82422C14.9727 6.40625 14.5039 6.87109 13.9258 6.87109C13.3438 6.87109 12.8789 6.40234 12.8789 5.82422C12.8789 5.24609 13.3477 4.77734 13.9258 4.77734C14.5039 4.77734 14.9727 5.24609 14.9727 5.82422ZM17.9453 6.88672C17.8789 5.48438 17.5586 4.24219 16.5312 3.21875C15.5078 2.19531 14.2656 1.875 12.8633 1.80469C11.418 1.72266 7.08594 1.72266 5.64062 1.80469C4.24219 1.87109 3 2.19141 1.97266 3.21484C0.945313 4.23828 0.628906 5.48047 0.558594 6.88281C0.476562 8.32812 0.476562 12.6602 0.558594 14.1055C0.625 15.5078 0.945313 16.75 1.97266 17.7734C3 18.7969 4.23828 19.1172 5.64062 19.1875C7.08594 19.2695 11.418 19.2695 12.8633 19.1875C14.2656 19.1211 15.5078 18.8008 16.5312 17.7734C17.5547 16.75 17.875 15.5078 17.9453 14.1055C18.0273 12.6602 18.0273 8.33203 17.9453 6.88672ZM16.0781 15.6562C15.7734 16.4219 15.1836 17.0117 14.4141 17.3203C13.2617 17.7773 10.5273 17.6719 9.25391 17.6719C7.98047 17.6719 5.24219 17.7734 4.09375 17.3203C3.32812 17.0156 2.73828 16.4258 2.42969 15.6562C1.97266 14.5039 2.07813 11.7695 2.07813 10.4961C2.07813 9.22266 1.97656 6.48438 2.42969 5.33594C2.73438 4.57031 3.32422 3.98047 4.09375 3.67187C5.24609 3.21484 7.98047 3.32031 9.25391 3.32031C10.5273 3.32031 13.2656 3.21875 14.4141 3.67187C15.1797 3.97656 15.7695 4.56641 16.0781 5.33594C16.5352 6.48828 16.4297 9.22266 16.4297 10.4961C16.4297 11.7695 16.5352 14.5078 16.0781 15.6562Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-studybud-gray-700 pt-8 text-center text-gray-300">
            <p>&copy; 2024 StudyBud. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={closeWaitlistModal}
      />
    </div>
  );
}
