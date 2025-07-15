import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Features() {
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
              <span className="text-blue-500 px-3 py-2 text-sm font-medium">
                Features
              </span>
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

            <button className="bg-studybud-blue-500 text-white px-6 py-2 rounded-lg hover:bg-studybud-blue-600 transition-colors font-semibold">
              Join Our Waitlist
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 to-teal-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold text-studybud-gray-800 mb-6">
            Powerful AI Features
          </h1>
          <p className="text-xl text-studybud-gray-600 mb-8">
            Discover how StudyBud AI transforms your learning experience with
            cutting-edge artificial intelligence and personalized insights.
          </p>
          <button className="bg-button-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all">
            Join Our Waitlist
          </button>
        </div>
      </section>

      {/* Core AI Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-studybud-gray-800 mb-4">
              Core AI Features
            </h2>
            <p className="text-xl text-studybud-gray-600">
              Everything you need to excel in your studies
            </p>
          </div>

          <div className="space-y-16">
            {/* AI-Generated Feedback */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6"
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
                <h3 className="text-3xl font-bold text-studybud-gray-800 mb-4">
                  AI-Generated Feedback
                </h3>
                <p className="text-lg text-studybud-gray-600 mb-6">
                  Get intelligent, detailed feedback on every answer with
                  explanations that help you understand concepts better.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 14 16"
                    >
                      <path d="M13.7063 3.2937C14.0969 3.68433 14.0969 4.3187 13.7063 4.70933L5.70627 12.7093C5.31565 13.1 4.68127 13.1 4.29065 12.7093L0.290649 8.70933C-0.0999756 8.3187 -0.0999756 7.68433 0.290649 7.2937C0.681274 6.90308 1.31565 6.90308 1.70627 7.2937L5.00002 10.5843L12.2938 3.2937C12.6844 2.90308 13.3188 2.90308 13.7094 3.2937H13.7063Z" />
                    </svg>
                    <span>Instant detailed explanations</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 14 16"
                    >
                      <path d="M13.7063 3.2937C14.0969 3.68433 14.0969 4.3187 13.7063 4.70933L5.70627 12.7093C5.31565 13.1 4.68127 13.1 4.29065 12.7093L0.290649 8.70933C-0.0999756 8.3187 -0.0999756 7.68433 0.290649 7.2937C0.681274 6.90308 1.31565 6.90308 1.70627 7.2937L5.00002 10.5843L12.2938 3.2937C12.6844 2.90308 13.3188 2.90308 13.7094 3.2937H13.7063Z" />
                    </svg>
                    <span>Step-by-step solution breakdowns</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 14 16"
                    >
                      <path d="M13.7063 3.2937C14.0969 3.68433 14.0969 4.3187 13.7063 4.70933L5.70627 12.7093C5.31565 13.1 4.68127 13.1 4.29065 12.7093L0.290649 8.70933C-0.0999756 8.3187 -0.0999756 7.68433 0.290649 7.2937C0.681274 6.90308 1.31565 6.90308 1.70627 7.2937L5.00002 10.5843L12.2938 3.2937C12.6844 2.90308 13.3188 2.90308 13.7094 3.2937H13.7063Z" />
                    </svg>
                    <span>Common mistake identification</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/3939d4c75a9f544388dce9475ba8e1b33771394f?width=768"
                  alt="AI Feedback Interface"
                  className="w-96 h-96 rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* Advanced Performance Analytics */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="flex justify-center lg:order-first">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/07ce9cd19be1db54c49af2213b1b2e1e5ecf0b70?width=768"
                  alt="Performance Analytics Dashboard"
                  className="w-96 h-96 rounded-2xl shadow-xl"
                />
              </div>
              <div>
                <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 3C3 2.17031 2.32969 1.5 1.5 1.5C0.670312 1.5 0 2.17031 0 3V18.75C0 20.8219 1.67812 22.5 3.75 22.5H22.5C23.3297 22.5 24 21.8297 24 21C24 20.1703 23.3297 19.5 22.5 19.5H3.75C3.3375 19.5 3 19.1625 3 18.75V3ZM22.0594 7.05938C22.6453 6.47344 22.6453 5.52188 22.0594 4.93594C21.4734 4.35 20.5219 4.35 19.9359 4.93594L15 9.87656L12.3094 7.18594C11.7234 6.6 10.7719 6.6 10.1859 7.18594L4.93594 12.4359C4.35 13.0219 4.35 13.9734 4.93594 14.5594C5.52188 15.1453 6.47344 15.1453 7.05938 14.5594L11.25 10.3734L13.9406 13.0641C14.5266 13.65 15.4781 13.65 16.0641 13.0641L22.0641 7.06406L22.0594 7.05938Z"
                      fill="#06B6D4"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-studybud-gray-800 mb-4">
                  Advanced Performance Analytics
                </h3>
                <p className="text-lg text-studybud-gray-600 mb-6">
                  Track your progress with detailed analytics that show exactly
                  where you're improving and what needs attention.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 14 16"
                    >
                      <path d="M13.7063 3.2937C14.0969 3.68433 14.0969 4.3187 13.7063 4.70933L5.70627 12.7093C5.31565 13.1 4.68127 13.1 4.29065 12.7093L0.290649 8.70933C-0.0999756 8.3187 -0.0999756 7.68433 0.290649 7.2937C0.681274 6.90308 1.31565 6.90308 1.70627 7.2937L5.00002 10.5843L12.2938 3.2937C12.6844 2.90308 13.3188 2.90308 13.7094 3.2937H13.7063Z" />
                    </svg>
                    <span>Topic-level performance tracking</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 14 16"
                    >
                      <path d="M13.7063 3.2937C14.0969 3.68433 14.0969 4.3187 13.7063 4.70933L5.70627 12.7093C5.31565 13.1 4.68127 13.1 4.29065 12.7093L0.290649 8.70933C-0.0999756 8.3187 -0.0999756 7.68433 0.290649 7.2937C0.681274 6.90308 1.31565 6.90308 1.70627 7.2937L5.00002 10.5843L12.2938 3.2937C12.6844 2.90308 13.3188 2.90308 13.7094 3.2937H13.7063Z" />
                    </svg>
                    <span>Progress visualization charts</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 14 16"
                    >
                      <path d="M13.7063 3.2937C14.0969 3.68433 14.0969 4.3187 13.7063 4.70933L5.70627 12.7093C5.31565 13.1 4.68127 13.1 4.29065 12.7093L0.290649 8.70933C-0.0999756 8.3187 -0.0999756 7.68433 0.290649 7.2937C0.681274 6.90308 1.31565 6.90308 1.70627 7.2937L5.00002 10.5843L12.2938 3.2937C12.6844 2.90308 13.3188 2.90308 13.7094 3.2937H13.7063Z" />
                    </svg>
                    <span>Weakness identification</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Personalized Study Plans */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-5 h-6"
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
                <h3 className="text-3xl font-bold text-studybud-gray-800 mb-4">
                  Personalized Study Plans
                </h3>
                <p className="text-lg text-studybud-gray-600 mb-6">
                  Receive AI-generated study recommendations tailored to your
                  learning style and performance patterns.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 14 16"
                    >
                      <path d="M13.7063 3.2937C14.0969 3.68433 14.0969 4.3187 13.7063 4.70933L5.70627 12.7093C5.31565 13.1 4.68127 13.1 4.29065 12.7093L0.290649 8.70933C-0.0999756 8.3187 -0.0999756 7.68433 0.290649 7.2937C0.681274 6.90308 1.31565 6.90308 1.70627 7.2937L5.00002 10.5843L12.2938 3.2937C12.6844 2.90308 13.3188 2.90308 13.7094 3.2937H13.7063Z" />
                    </svg>
                    <span>Custom practice questions</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 14 16"
                    >
                      <path d="M13.7063 3.2937C14.0969 3.68433 14.0969 4.3187 13.7063 4.70933L5.70627 12.7093C5.31565 13.1 4.68127 13.1 4.29065 12.7093L0.290649 8.70933C-0.0999756 8.3187 -0.0999756 7.68433 0.290649 7.2937C0.681274 6.90308 1.31565 6.90308 1.70627 7.2937L5.00002 10.5843L12.2938 3.2937C12.6844 2.90308 13.3188 2.90308 13.7094 3.2937H13.7063Z" />
                    </svg>
                    <span>Adaptive learning paths</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 14 16"
                    >
                      <path d="M13.7063 3.2937C14.0969 3.68433 14.0969 4.3187 13.7063 4.70933L5.70627 12.7093C5.31565 13.1 4.68127 13.1 4.29065 12.7093L0.290649 8.70933C-0.0999756 8.3187 -0.0999756 7.68433 0.290649 7.2937C0.681274 6.90308 1.31565 6.90308 1.70627 7.2937L5.00002 10.5843L12.2938 3.2937C12.6844 2.90308 13.3188 2.90308 13.7094 3.2937H13.7063Z" />
                    </svg>
                    <span>Time management recommendations</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/9b81727ecc6c5b8d774beaf840aa30d994a1634b?width=768"
                  alt="Personalized Study Plans Interface"
                  className="w-96 h-96 rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Feature Set */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-studybud-gray-800 mb-4">
              Complete Feature Set
            </h2>
            <p className="text-xl text-studybud-gray-600">
              All the tools you need for academic success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Question Generation */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-6"
                  viewBox="0 0 30 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 0C15.8297 0 16.5 0.670312 16.5 1.5V4.5H22.125C23.9906 4.5 25.5 6.00938 25.5 7.875V20.625C25.5 22.4906 23.9906 24 22.125 24H7.875C6.00938 24 4.5 22.4906 4.5 20.625V7.875C4.5 6.00938 6.00938 4.5 7.875 4.5H13.5V1.5C13.5 0.670312 14.1703 0 15 0ZM9.75 18C9.3375 18 9 18.3375 9 18.75C9 19.1625 9.3375 19.5 9.75 19.5H11.25C11.6625 19.5 12 19.1625 12 18.75C12 18.3375 11.6625 18 11.25 18H9.75ZM14.25 18C13.8375 18 13.5 18.3375 13.5 18.75C13.5 19.1625 13.8375 19.5 14.25 19.5H15.75C16.1625 19.5 16.5 19.1625 16.5 18.75C16.5 18.3375 16.1625 18 15.75 18H14.25ZM18.75 18C18.3375 18 18 18.3375 18 18.75C18 19.1625 18.3375 19.5 18.75 19.5H20.25C20.6625 19.5 21 19.1625 21 18.75C21 18.3375 20.6625 18 20.25 18H18.75ZM12.375 12C12.375 11.5027 12.1775 11.0258 11.8258 10.6742C11.4742 10.3225 10.9973 10.125 10.5 10.125C10.0027 10.125 9.52581 10.3225 9.17418 10.6742C8.82254 11.0258 8.625 11.5027 8.625 12C8.625 12.4973 8.82254 12.9742 9.17418 13.3258C9.52581 13.6775 10.0027 13.875 10.5 13.875C10.9973 13.875 11.4742 13.6775 11.8258 13.3258C12.1775 12.9742 12.375 12.4973 12.375 12ZM19.5 13.875C19.9973 13.875 20.4742 13.6775 20.8258 13.3258C21.1775 12.9742 21.375 12.4973 21.375 12C21.375 11.5027 21.1775 11.0258 20.8258 10.6742C20.4742 10.3225 19.9973 10.125 19.5 10.125C19.0027 10.125 18.5258 10.3225 18.1742 10.6742C17.8225 11.0258 17.625 11.5027 17.625 12C17.625 12.4973 17.8225 12.9742 18.1742 13.3258C18.5258 13.6775 19.0027 13.875 19.5 13.875ZM2.25 10.5H3V19.5H2.25C1.00781 19.5 0 18.4922 0 17.25V12.75C0 11.5078 1.00781 10.5 2.25 10.5ZM27.75 10.5C28.9922 10.5 30 11.5078 30 12.75V17.25C30 18.4922 28.9922 19.5 27.75 19.5H27V10.5H27.75Z"
                    fill="#3B82F6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-studybud-gray-800 mb-4">
                Smart Question Generation
              </h3>
              <p className="text-studybud-gray-600">
                AI creates unlimited practice questions based on your curriculum
                and difficulty level.
              </p>
            </div>

            {/* Weakness Targeting */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3609 14.625H11.6109C11.3015 14.625 11.0484 14.3719 11.0484 14.0625C11.0484 10.7344 14.6765 11.0672 14.6765 9.00937C14.6765 8.07187 13.8422 7.125 11.9859 7.125C10.6219 7.125 9.90936 7.575 9.21092 8.47031C9.02811 8.70469 8.69061 8.75156 8.45154 8.58281L7.83748 8.15156C7.57498 7.96875 7.51404 7.59844 7.71561 7.34531C8.70936 6.07031 9.89061 5.25 11.9906 5.25C14.4422 5.25 16.5562 6.64687 16.5562 9.00937C16.5562 12.1781 12.9281 11.9859 12.9281 14.0625C12.9234 14.3719 12.6703 14.625 12.3609 14.625Z"
                    fill="#16A34A"
                  />
                  <path
                    d="M12 18.375C12.7249 18.375 13.3125 17.7874 13.3125 17.0625C13.3125 16.3376 12.7249 15.75 12 15.75C11.2751 15.75 10.6875 16.3376 10.6875 17.0625C10.6875 17.7874 11.2751 18.375 12 18.375Z"
                    fill="#16A34A"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-studybud-gray-800 mb-4">
                Weakness Targeting
              </h3>
              <p className="text-studybud-gray-600">
                Automatically identifies and focuses on your weakest areas for
                maximum improvement.
              </p>
            </div>

            {/* Time Management */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0ZM10.875 5.625V12C10.875 12.375 11.0625 12.7266 11.3766 12.9375L15.8766 15.9375C16.3922 16.2844 17.0906 16.1437 17.4375 15.6234C17.7844 15.1031 17.6437 14.4094 17.1234 14.0625L13.125 11.4V5.625C13.125 5.00156 12.6234 4.5 12 4.5C11.3766 4.5 10.875 5.00156 10.875 5.625Z"
                    fill="#CA8A04"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-studybud-gray-800 mb-4">
                Time Management
              </h3>
              <p className="text-studybud-gray-600">
                Track time spent on questions and get insights on pacing for
                real exams.
              </p>
            </div>

            {/* Exam Simulation */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-6"
                  viewBox="0 0 30 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 1.5C14.6203 1.5 14.2453 1.56562 13.8891 1.69219L0.740614 6.44062C0.295302 6.60469 -1.09092e-05 7.02656 -1.09092e-05 7.5C-1.09092e-05 7.97344 0.295302 8.39531 0.740614 8.55938L3.45468 9.53906C2.68593 10.7484 2.24999 12.1781 2.24999 13.6828V15C2.24999 16.3313 1.74374 17.7047 1.20468 18.7875C0.899989 19.3969 0.553114 19.9969 0.149989 20.55C-1.09076e-05 20.7516 -0.0421984 21.0141 0.0421766 21.2531C0.126552 21.4922 0.323427 21.6703 0.567177 21.7313L3.56718 22.4813C3.76405 22.5328 3.97499 22.4953 4.14843 22.3875C4.32186 22.2797 4.44374 22.1016 4.48124 21.9C4.88436 19.8938 4.6828 18.0938 4.3828 16.8047C4.2328 16.1391 4.03124 15.4594 3.74999 14.8359V13.6828C3.74999 12.2672 4.22811 10.9312 5.0578 9.8625C5.66249 9.13594 6.4453 8.55 7.36405 8.18906L14.7234 5.29688C15.1078 5.14687 15.5437 5.33437 15.6937 5.71875C15.8437 6.10313 15.6562 6.53906 15.2719 6.68906L7.91249 9.58125C7.33124 9.81094 6.8203 10.1625 6.40311 10.5938L13.8844 13.2938C14.2406 13.4203 14.6156 13.4859 14.9953 13.4859C15.375 13.4859 15.75 13.4203 16.1062 13.2938L29.2594 8.55938C29.7047 8.4 30 7.97344 30 7.5C30 7.02656 29.7047 6.60469 29.2594 6.44062L16.1109 1.69219C15.7547 1.56562 15.3797 1.5 15 1.5ZM5.99999 19.125C5.99999 20.7797 10.0312 22.5 15 22.5C19.9687 22.5 24 20.7797 24 19.125L23.2828 12.3094L16.6172 14.7188C16.0969 14.9062 15.5484 15 15 15C14.4516 15 13.8984 14.9062 13.3828 14.7188L6.71718 12.3094L5.99999 19.125Z"
                    fill="#DC2626"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-studybud-gray-800 mb-4">
                Exam Simulation
              </h3>
              <p className="text-studybud-gray-600">
                Practice with realistic exam conditions and timing to build
                confidence.
              </p>
            </div>

            {/* Peer Comparison */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-6"
                  viewBox="0 0 30 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.75 0C7.74456 0 8.69839 0.395088 9.40165 1.09835C10.1049 1.80161 10.5 2.75544 10.5 3.75C10.5 4.74456 10.1049 5.69839 9.40165 6.40165C8.69839 7.10491 7.74456 7.5 6.75 7.5C5.75544 7.5 4.80161 7.10491 4.09835 6.40165C3.39509 5.69839 3 4.74456 3 3.75C3 2.75544 3.39509 1.80161 4.09835 1.09835C4.80161 0.395088 5.75544 0 6.75 0ZM24 0C24.9946 0 25.9484 0.395088 26.6516 1.09835C27.3549 1.80161 27.75 2.75544 27.75 3.75C27.75 4.74456 27.3549 5.69839 26.6516 6.40165C25.9484 7.10491 24.9946 7.5 24 7.5C23.0054 7.5 22.0516 7.10491 21.3484 6.40165C20.6451 5.69839 20.25 4.74456 20.25 3.75C20.25 2.75544 20.6451 1.80161 21.3484 1.09835C22.0516 0.395088 23.0054 0 24 0ZM0 14.0016C0 11.2406 2.24062 9 5.00156 9H7.00312C7.74844 9 8.45625 9.16406 9.09375 9.45469C9.03281 9.79219 9.00469 10.1438 9.00469 10.5C9.00469 12.2906 9.79219 13.8984 11.0344 15C11.025 15 11.0156 15 11.0016 15H0.998437C0.45 15 0 14.55 0 14.0016ZM18.9984 15C18.9891 15 18.9797 15 18.9656 15C20.2125 13.8984 20.9953 12.2906 20.9953 10.5C20.9953 10.1438 20.9625 9.79688 20.9062 9.45469C21.5438 9.15938 22.2516 9 22.9969 9H24.9984C27.7594 9 30 11.2406 30 14.0016C30 14.5547 29.55 15 29.0016 15H18.9984ZM10.5 10.5C10.5 9.30653 10.9741 8.16193 11.818 7.31802C12.6619 6.47411 13.8065 6 15 6C16.1935 6 17.3381 6.47411 18.182 7.31802C19.0259 8.16193 19.5 9.30653 19.5 10.5C19.5 11.6935 19.0259 12.8381 18.182 13.682C17.3381 14.5259 16.1935 15 15 15C13.8065 15 12.6619 14.5259 11.818 13.682C10.9741 12.8381 10.5 11.6935 10.5 10.5ZM6 22.7484C6 19.2984 8.79844 16.5 12.2484 16.5H17.7516C21.2016 16.5 24 19.2984 24 22.7484C24 23.4375 23.4422 24 22.7484 24H7.25156C6.5625 24 6 23.4422 6 22.7484Z"
                    fill="#4F46E5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-studybud-gray-800 mb-4">
                Peer Comparison
              </h3>
              <p className="text-studybud-gray-600">
                See how you stack up against other students in your course or
                grade level.
              </p>
            </div>

            {/* Mobile Learning */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-5 h-6"
                  viewBox="0 0 18 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.75 3C0.75 1.34531 2.09531 0 3.75 0H14.25C15.9047 0 17.25 1.34531 17.25 3V21C17.25 22.6547 15.9047 24 14.25 24H3.75C2.09531 24 0.75 22.6547 0.75 21V3ZM10.5 21C10.5 20.6022 10.342 20.2206 10.0607 19.9393C9.77936 19.658 9.39782 19.5 9 19.5C8.60218 19.5 8.22064 19.658 7.93934 19.9393C7.65804 20.2206 7.5 20.6022 7.5 21C7.5 21.3978 7.65804 21.7794 7.93934 22.0607C8.22064 22.342 8.60218 22.5 9 22.5C9.39782 22.5 9.77936 22.342 10.0607 22.0607C10.342 21.7794 10.5 21.3978 10.5 21ZM14.25 3H3.75V18H14.25V3Z"
                    fill="#DB2777"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-studybud-gray-800 mb-4">
                Mobile Learning
              </h3>
              <p className="text-studybud-gray-600">
                Study anywhere with our responsive design that works perfectly
                on all devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* See Features in Action */}
      <section className="py-20 bg-gradient-to-r from-studybud-blue-500 to-studybud-cyan-500">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            See Features in Action
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Experience the power of AI-driven learning with our interactive
            demo. No signup required.
          </p>
          <button className="bg-button-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all">
            Join Our Waitlist
          </button>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-studybud-gray-800 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-studybud-gray-600">
              Start free, upgrade when you're ready
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-studybud-gray-800 mb-6">
                Free
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-studybud-gray-800">
                  $0
                </span>
                <span className="text-studybud-gray-600 ml-2">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M13.7063 3.2937C14.0969 3.68433 14.0969 4.3187 13.7063 4.70933L5.70627 12.7093C5.31565 13.1 4.68127 13.1 4.29065 12.7093L0.290649 8.70933C-0.0999756 8.3187 -0.0999756 7.68433 0.290649 7.2937C0.681274 6.90308 1.31565 6.90308 1.70627 7.2937L5.00002 10.5843L12.2938 3.2937C12.6844 2.90308 13.3188 2.90308 13.7094 3.2937H13.7063Z" />
                  </svg>
                  <span>5 practice tests per month</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M13.7063 3.2937C14.0969 3.68433 14.0969 4.3187 13.7063 4.70933L5.70627 12.7093C5.31565 13.1 4.68127 13.1 4.29065 12.7093L0.290649 8.70933C-0.0999756 8.3187 -0.0999756 7.68433 0.290649 7.2937C0.681274 6.90308 1.31565 6.90308 1.70627 7.2937L5.00002 10.5843L12.2938 3.2937C12.6844 2.90308 13.3188 2.90308 13.7094 3.2937H13.7063Z" />
                  </svg>
                  <span>Basic AI feedback</span>
                </li>
              </ul>
              <button className="w-full bg-gray-300 text-studybud-gray-800 py-3 rounded-lg font-semibold">
                Join Our Waitlist
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-studybud-blue-500 rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-studybud-gray-800 px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Pro</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$19</span>
                <span className="text-white ml-2">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-300 mr-3"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M13.7063 3.2937C14.0969 3.68433 14.0969 4.3187 13.7063 4.70933L5.70627 12.7093C5.31565 13.1 4.68127 13.1 4.29065 12.7093L0.290649 8.70933C-0.0999756 8.3187 -0.0999756 7.68433 0.290649 7.2937C0.681274 6.90308 1.31565 6.90308 1.70627 7.2937L5.00002 10.5843L12.2938 3.2937C12.6844 2.90308 13.3188 2.90308 13.7094 3.2937H13.7063Z" />
                  </svg>
                  <span className="text-white">Unlimited practice tests</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-300 mr-3"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M13.7063 3.2937C14.0969 3.68433 14.0969 4.3187 13.7063 4.70933L5.70627 12.7093C5.31565 13.1 4.68127 13.1 4.29065 12.7093L0.290649 8.70933C-0.0999756 8.3187 -0.0999756 7.68433 0.290649 7.2937C0.681274 6.90308 1.31565 6.90308 1.70627 7.2937L5.00002 10.5843L12.2938 3.2937C12.6844 2.90308 13.3188 2.90308 13.7094 3.2937H13.7063Z" />
                  </svg>
                  <span className="text-white">Advanced AI feedback</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-300 mr-3"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M13.7063 3.2937C14.0969 3.68433 14.0969 4.3187 13.7063 4.70933L5.70627 12.7093C5.31565 13.1 4.68127 13.1 4.29065 12.7093L0.290649 8.70933C-0.0999756 8.3187 -0.0999756 7.68433 0.290649 7.2937C0.681274 6.90308 1.31565 6.90308 1.70627 7.2937L5.00002 10.5843L12.2938 3.2937C12.6844 2.90308 13.3188 2.90308 13.7094 3.2937H13.7063Z" />
                  </svg>
                  <span className="text-white">Personalized study plans</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-300 mr-3"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M13.7063 3.2937C14.0969 3.68433 14.0969 4.3187 13.7063 4.70933L5.70627 12.7093C5.31565 13.1 4.68127 13.1 4.29065 12.7093L0.290649 8.70933C-0.0999756 8.3187 -0.0999756 7.68433 0.290649 7.2937C0.681274 6.90308 1.31565 6.90308 1.70627 7.2937L5.00002 10.5843L12.2938 3.2937C12.6844 2.90308 13.3188 2.90308 13.7094 3.2937H13.7063Z" />
                  </svg>
                  <span className="text-white">Performance analytics</span>
                </li>
              </ul>
              <button className="w-full bg-white text-studybud-blue-500 py-3 rounded-lg font-semibold">
                Join Our Waitlist
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-studybud-gray-800 mb-6">
                Premium
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-studybud-gray-800">
                  $39
                </span>
                <span className="text-studybud-gray-600 ml-2">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M13.7063 3.2937C14.0969 3.68433 14.0969 4.3187 13.7063 4.70933L5.70627 12.7093C5.31565 13.1 4.68127 13.1 4.29065 12.7093L0.290649 8.70933C-0.0999756 8.3187 -0.0999756 7.68433 0.290649 7.2937C0.681274 6.90308 1.31565 6.90308 1.70627 7.2937L5.00002 10.5843L12.2938 3.2937C12.6844 2.90308 13.3188 2.90308 13.7094 3.2937H13.7063Z" />
                  </svg>
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M13.7063 3.2937C14.0969 3.68433 14.0969 4.3187 13.7063 4.70933L5.70627 12.7093C5.31565 13.1 4.68127 13.1 4.29065 12.7093L0.290649 8.70933C-0.0999756 8.3187 -0.0999756 7.68433 0.290649 7.2937C0.681274 6.90308 1.31565 6.90308 1.70627 7.2937L5.00002 10.5843L12.2938 3.2937C12.6844 2.90308 13.3188 2.90308 13.7094 3.2937H13.7063Z" />
                  </svg>
                  <span>1-on-1 tutoring sessions</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M13.7063 3.2937C14.0969 3.68433 14.0969 4.3187 13.7063 4.70933L5.70627 12.7093C5.31565 13.1 4.68127 13.1 4.29065 12.7093L0.290649 8.70933C-0.0999756 8.3187 -0.0999756 7.68433 0.290649 7.2937C0.681274 6.90308 1.31565 6.90308 1.70627 7.2937L5.00002 10.5843L12.2938 3.2937C12.6844 2.90308 13.3188 2.90308 13.7094 3.2937H13.7063Z" />
                  </svg>
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M13.7063 3.2937C14.0969 3.68433 14.0969 4.3187 13.7063 4.70933L5.70627 12.7093C5.31565 13.1 4.68127 13.1 4.29065 12.7093L0.290649 8.70933C-0.0999756 8.3187 -0.0999756 7.68433 0.290649 7.2937C0.681274 6.90308 1.31565 6.90308 1.70627 7.2937L5.00002 10.5843L12.2938 3.2937C12.6844 2.90308 13.3188 2.90308 13.7094 3.2937H13.7063Z" />
                  </svg>
                  <span>Personalized study plans</span>
                </li>
              </ul>
              <button className="w-full bg-studybud-blue-500 text-white py-3 rounded-lg font-semibold">
                Join Our Waitlist
              </button>
            </div>
          </div>
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
    </div>
  );
}
