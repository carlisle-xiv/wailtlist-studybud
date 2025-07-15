import { Link } from "react-router-dom";

export default function Reviews() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <svg
                  className="h-8 w-8 text-blue-500"
                  viewBox="0 0 30 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0002 1.5C14.6205 1.5 14.2455 1.56562 13.8893 1.69219L0.740858 6.44062C0.295546 6.60469 0.000233231 7.02656 0.000233231 7.5C0.000233231 7.97344 0.295546 8.39531 0.740858 8.55938L3.45492 9.53906C2.68617 10.7484 2.25023 12.1781 2.25023 13.6828V15C2.25023 16.3313 1.74398 17.7047 1.20492 18.7875C0.900233 19.3969 0.553358 19.9969 0.150233 20.55C0.000233233 20.7516 -0.0419543 21.0141 0.0424207 21.2531C0.126796 21.4922 0.323671 21.6703 0.567421 21.7313L3.56742 22.4813C3.7643 22.5328 3.97523 22.4953 4.14867 22.3875C4.32211 22.2797 4.44398 22.1016 4.48148 21.9C4.88461 19.8938 4.68305 18.0938 4.38305 16.8047C4.23305 16.1391 4.03148 15.4594 3.75023 14.8359V13.6828C3.75023 12.2672 4.22836 10.9312 5.05805 9.8625C5.66273 9.13594 6.44555 8.55 7.3643 8.18906L14.7237 5.29688C15.108 5.14687 15.544 5.33437 15.694 5.71875C15.844 6.10313 15.6565 6.53906 15.2721 6.68906L7.91273 9.58125C7.33148 9.81094 6.82055 10.1625 6.40336 10.5938L13.8846 13.2938C14.2409 13.4203 14.6159 13.4859 14.9955 13.4859C15.3752 13.4859 15.7502 13.4203 16.1065 13.2938L29.2596 8.55938C29.7049 8.4 30.0002 7.97344 30.0002 7.5C30.0002 7.02656 29.7049 6.60469 29.2596 6.44062L16.1112 1.69219C15.7549 1.56562 15.3799 1.5 15.0002 1.5ZM6.00023 19.125C6.00023 20.7797 10.0315 22.5 15.0002 22.5C19.969 22.5 24.0002 20.7797 24.0002 19.125L23.283 12.3094L16.6174 14.7188C16.0971 14.9062 15.5487 15 15.0002 15C14.4518 15 13.8987 14.9062 13.383 14.7188L6.71742 12.3094L6.00023 19.125Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="ml-2 text-xl font-bold text-gray-900">
                  StudyBud
                </span>
              </div>
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
              <span className="text-blue-500 px-3 py-2 text-sm font-medium">
                Reviews
              </span>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Login
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-purple-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            What Our Community Says
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join thousands of students and educators who have transformed their
            learning and teaching experience with StudyBud AI
          </p>

          {/* Stats */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            {/* Rating */}
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">4.9/5</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-gray-600">Average Rating</div>
            </div>

            {/* Happy Students */}
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-500 mb-2">25K+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>

            {/* Educators */}
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">
                1,200+
              </div>
              <div className="text-gray-600">Educators</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-medium">
              All Reviews
            </button>
            <button className="bg-gray-100 text-gray-600 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Students
            </button>
            <button className="bg-gray-100 text-gray-600 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Teachers
            </button>
            <button className="bg-gray-100 text-gray-600 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              High School
            </button>
            <button className="bg-gray-100 text-gray-600 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              University
            </button>
            <button className="bg-gray-100 text-gray-600 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              5 Stars
            </button>
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Featured Success Stories
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Alex Thompson */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a9bf703b43cd8ca3228c2968139e8bf8ba2b833f?width=128"
                  alt="Alex Thompson"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Alex Thompson
                  </h3>
                  <p className="text-gray-600">Computer Science Student, MIT</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "StudyBud AI completely changed how I prepare for exams. The
                AI-generated insights helped me identify my weak points in
                algorithms and data structures. I went from struggling with C+
                grades to consistently scoring A's. The personalized study
                recommendations are incredibly accurate."
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-600 font-semibold">
                  Grade Improvement: C+ → A average
                </p>
              </div>
            </div>

            {/* Dr. Maria Rodriguez */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b930e482a608d169fe4560d3ec5f106c29018134?width=128"
                  alt="Dr. Maria Rodriguez"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Dr. Maria Rodriguez
                  </h3>
                  <p className="text-gray-600">
                    Biology Professor, Stanford University
                  </p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "As an educator with 15 years of experience, StudyBud AI is the
                most innovative tool I've encountered. It saves me 12+ hours
                weekly on grading and provides insights I never had before. My
                students are more engaged and their performance has improved
                dramatically."
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-600 font-semibold">
                  Time Saved: 12+ hours per week
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Reviews */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Student Reviews
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Emma Chen */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/57beba2c4fe6a8b3c72add00db1b3755ffb37328?width=96"
                  alt="Emma Chen"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Emma Chen</h4>
                  <p className="text-sm text-gray-600">Pre-Med Student</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "The practice tests are incredibly realistic and the feedback is
                so detailed. I finally understand where I was going wrong in
                organic chemistry!"
              </p>
            </div>

            {/* James Wilson */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/5ce0de721385be05a183760880836860bd21c0c1?width=96"
                  alt="James Wilson"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-bold text-gray-900">James Wilson</h4>
                  <p className="text-sm text-gray-600">Engineering Student</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "Game changer for calculus! The AI explains concepts in multiple
                ways until you get it. My grades improved from D to B+ in one
                semester."
              </p>
            </div>

            {/* Sophie Martinez */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6f63bdd798dd3714fc3b3307fe9696def1c246a7?width=96"
                  alt="Sophie Martinez"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Sophie Martinez</h4>
                  <p className="text-sm text-gray-600">Psychology Major</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "Love how it adapts to my learning style. The study schedule
                feature helped me balance multiple courses effectively. Highly
                recommend!"
              </p>
            </div>

            {/* David Park */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/349965e41688233e02d674b0bd3b958817b98add?width=96"
                  alt="David Park"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-bold text-gray-900">David Park</h4>
                  <p className="text-sm text-gray-600">Business Student</p>
                  <div className="flex mt-1">
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg
                      className="w-3 h-3 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "The analytics dashboard shows exactly where I need to focus.
                Helped me ace my finance final after struggling all semester."
              </p>
            </div>

            {/* Rachel Kim */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b4e6a0c25793c387b3ee9c7b9e2a82d80615fbb8?width=96"
                  alt="Rachel Kim"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Rachel Kim</h4>
                  <p className="text-sm text-gray-600">High School Senior</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "Perfect for SAT prep! The adaptive questions match the real
                test difficulty. Improved my math score by 150 points!"
              </p>
            </div>

            {/* Michael Brown */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/1f928f85edd8bc6f74152003a9412e459c4f5569?width=96"
                  alt="Michael Brown"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Michael Brown</h4>
                  <p className="text-sm text-gray-600">History Major</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "Even works great for essay-based subjects! The AI feedback on
                my historical analysis papers has been incredibly helpful."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educator Reviews */}
      <section className="bg-gradient-to-r from-purple-50 to-purple-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Educator Reviews
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Prof. John Anderson */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7fcd1f98cf662ff965e2708c4d6ea218afe9490c?width=128"
                  alt="Prof. John Anderson"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Prof. John Anderson
                  </h3>
                  <p className="text-gray-600">Mathematics Department, UCLA</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                "StudyBud AI has transformed my teaching methodology. The
                detailed analytics help me understand each student's learning
                patterns. I can now provide targeted interventions that actually
                work. My class average has improved by 18% this semester."
              </p>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-blue-600 font-semibold text-sm">
                  Class Performance: +18% improvement
                </p>
              </div>
            </div>

            {/* Dr. Lisa Chang */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/55505ea084430f4ed5ec71dfa13a5f42c027d459?width=128"
                  alt="Dr. Lisa Chang"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Dr. Lisa Chang
                  </h3>
                  <p className="text-gray-600">
                    Chemistry Teacher, Lincoln High
                  </p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                "The automated grading feature is a lifesaver! I used to spend
                entire weekends grading tests. Now I can focus on creating
                better learning experiences. The AI-generated questions are
                perfectly aligned with my curriculum standards."
              </p>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-green-600 font-semibold text-sm">
                  Time Saved: 15+ hours per week
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Results */}
      <section className="bg-gradient-to-r from-blue-500 to-cyan-500 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Proven Results</h2>
          <p className="text-xl text-blue-100 mb-12">
            See the impact StudyBud AI has on student performance
          </p>

          <div className="grid md:grid-cols-4 gap-8">
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1">
              <div className="flex items-center mb-4">
                <svg
                  className="h-8 w-8 text-blue-500"
                  viewBox="0 0 30 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0002 1.5C14.6205 1.5 14.2455 1.56562 13.8893 1.69219L0.740858 6.44062C0.295546 6.60469 0.000233231 7.02656 0.000233231 7.5C0.000233231 7.97344 0.295546 8.39531 0.740858 8.55938L3.45492 9.53906C2.68617 10.7484 2.25023 12.1781 2.25023 13.6828V15C2.25023 16.3313 1.74398 17.7047 1.20492 18.7875C0.900233 19.3969 0.553358 19.9969 0.150233 20.55C0.000233233 20.7516 -0.0419543 21.0141 0.0424207 21.2531C0.126796 21.4922 0.323671 21.6703 0.567421 21.7313L3.56742 22.4813C3.7643 22.5328 3.97523 22.4953 4.14867 22.3875C4.32211 22.2797 4.44398 22.1016 4.48148 21.9C4.88461 19.8938 4.68305 18.0938 4.38305 16.8047C4.23305 16.1391 4.03148 15.4594 3.75023 14.8359V13.6828C3.75023 12.2672 4.22836 10.9312 5.05805 9.8625C5.66273 9.13594 6.44555 8.55 7.3643 8.18906L14.7237 5.29688C15.108 5.14687 15.544 5.33437 15.694 5.71875C15.844 6.10313 15.6565 6.53906 15.2721 6.68906L7.91273 9.58125C7.33148 9.81094 6.82055 10.1625 6.40336 10.5938L13.8846 13.2938C14.2409 13.4203 14.6159 13.4859 14.9955 13.4859C15.3752 13.4859 15.7502 13.4203 16.1065 13.2938L29.2596 8.55938C29.7049 8.4 30.0002 7.97344 30.0002 7.5C30.0002 7.02656 29.7049 6.60469 29.2596 6.44062L16.1112 1.69219C15.7549 1.56562 15.3799 1.5 15.0002 1.5ZM6.00023 19.125C6.00023 20.7797 10.0315 22.5 15.0002 22.5C19.969 22.5 24.0002 20.7797 24.0002 19.125L23.283 12.3094L16.6174 14.7188C16.0971 14.9062 15.5487 15 15.0002 15C14.4518 15 13.8987 14.9062 13.383 14.7188L6.71742 12.3094L6.00023 19.125Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="ml-2 text-xl font-bold">StudyBud</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering students and educators with AI-driven learning
                solutions.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/features" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/how-it-works" className="hover:text-white">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="/teachers" className="hover:text-white">
                    For Teachers
                  </Link>
                </li>
                <li>
                  <Link to="/reviews" className="hover:text-white">
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 StudyBud. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
