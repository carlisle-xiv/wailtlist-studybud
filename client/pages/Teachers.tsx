import { Link } from "react-router-dom";

const Teachers = () => {
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
                to="/reviews"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Reviews
              </Link>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                Login
              </button>
              <button className="bg-studybud-blue-500 text-white px-4 py-2 rounded-lg hover:bg-studybud-blue-600 transition-colors">
                Sign Up
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
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-studybud-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Start Free Trial
                </button>
                <button className="border-2 border-studybud-blue-500 text-studybud-blue-500 px-8 py-4 rounded-lg font-semibold hover:bg-studybud-blue-50 transition-colors">
                  Schedule Demo
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

      {/* Powerful Tools for Educators */}
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

          {/* Create Courses & Upload Syllabus */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Create Courses & Upload Syllabus
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Upload your curriculum and let our AI generate aligned
                assessments. Create comprehensive courses with learning
                objectives, materials, and assessments.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 3.41582V11.0002C9 11.5533 8.55313 12.0002 8 12.0002C7.44688 12.0002 7 11.5533 7 11.0002V3.41582L4.70625 5.70957C4.31563 6.1002 3.68125 6.1002 3.29063 5.70957C2.9 5.31895 2.9 4.68457 3.29063 4.29395L7.29063 0.293945C7.68125 -0.0966797 8.31563 -0.0966797 8.70625 0.293945L12.7063 4.29395C13.0969 4.68457 13.0969 5.31895 12.7063 5.70957C12.3156 6.1002 11.6812 6.1002 11.2906 5.70957L9 3.41582ZM2 11.0002H6C6 12.1033 6.89687 13.0002 8 13.0002C9.10312 13.0002 10 12.1033 10 11.0002H14C15.1031 11.0002 16 11.8971 16 13.0002V14.0002C16 15.1033 15.1031 16.0002 14 16.0002H2C0.896875 16.0002 0 15.1033 0 14.0002V13.0002C0 11.8971 0.896875 11.0002 2 11.0002ZM13.5 14.2502C13.6989 14.2502 13.8897 14.1712 14.0303 14.0305C14.171 13.8899 14.25 13.6991 14.25 13.5002C14.25 13.3013 14.171 13.1105 14.0303 12.9699C13.8897 12.8292 13.6989 12.7502 13.5 12.7502C13.3011 12.7502 13.1103 12.8292 12.9697 12.9699C12.829 13.1105 12.75 13.3013 12.75 13.5002C12.75 13.6991 12.829 13.8899 12.9697 14.0305C13.1103 14.1712 13.3011 14.2502 13.5 14.2502Z" />
                  </svg>
                  <span className="text-gray-700">
                    Drag & drop syllabus upload
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0.440723 14.4782C-0.143652 13.8938 -0.143652 12.9438 0.440723 12.3563L12.3563 0.440723C12.9407 -0.143652 13.8907 -0.143652 14.4782 0.440723L15.5595 1.52197C16.1438 2.10635 16.1438 3.05635 15.5595 3.64385L3.64072 15.5595C3.05635 16.1438 2.10635 16.1438 1.51885 15.5595L0.440723 14.4782ZM10.8626 5.8626L14.1438 2.58135L13.4188 1.85322L10.1376 5.13447L10.8657 5.8626H10.8626Z" />
                  </svg>
                  <span className="text-gray-700">
                    AI-generated question banks
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M9 2C9 2.55313 8.55313 3 8 3H1C0.446875 3 0 2.55313 0 2C0 1.44687 0.446875 1 1 1H8C8.55313 1 9 1.44687 9 2ZM9 10C9 10.5531 8.55313 11 8 11H1C0.446875 11 0 10.5531 0 10C0 9.44687 0.446875 9 1 9H8C8.55313 9 9 9.44687 9 10ZM0 6C0 5.44688 0.446875 5 1 5H13C13.5531 5 14 5.44688 14 6C14 6.55312 13.5531 7 13 7H1C0.446875 7 0 6.55312 0 6ZM14 14C14 14.5531 13.5531 15 13 15H1C0.446875 15 0 14.5531 0 14C0 13.4469 0.446875 13 1 13H13C13.5531 13 14 13.4469 14 14Z" />
                  </svg>
                  <span className="text-gray-700">
                    Curriculum alignment tools
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/092e8364234ccfb909ed7210025877feb7cb215b?width=768"
                alt="Course creation interface"
                className="w-96 h-96 rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Smart Assessment Creation */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="lg:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Smart Assessment Creation
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Build comprehensive assessments with multiple question types.
                Our AI suggests questions based on learning objectives and
                difficulty levels.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM5.30625 5.16563C5.55312 4.46875 6.21563 4 6.95625 4H8.77812C9.86875 4 10.75 4.88438 10.75 5.97188C10.75 6.67813 10.3719 7.33125 9.75937 7.68437L8.75 8.2625C8.74375 8.66875 8.40938 9 8 9C7.58437 9 7.25 8.66562 7.25 8.25V7.82812C7.25 7.55937 7.39375 7.3125 7.62813 7.17812L9.0125 6.38438C9.15938 6.3 9.25 6.14375 9.25 5.975C9.25 5.7125 9.0375 5.50313 8.77812 5.50313H6.95625C6.85 5.50313 6.75625 5.56875 6.72188 5.66875L6.70937 5.70625C6.57188 6.09688 6.14062 6.3 5.75313 6.1625C5.36563 6.025 5.15938 5.59375 5.29688 5.20625L5.30937 5.16875L5.30625 5.16563ZM7 11C7 10.7348 7.10536 10.4804 7.29289 10.2929C7.48043 10.1054 7.73478 10 8 10C8.26522 10 8.51957 10.1054 8.70711 10.2929C8.89464 10.4804 9 10.7348 9 11C9 11.2652 8.89464 11.5196 8.70711 11.7071C8.51957 11.8946 8.26522 12 8 12C7.73478 12 7.48043 11.8946 7.29289 11.7071C7.10536 11.5196 7 11.2652 7 11Z" />
                  </svg>
                  <span className="text-gray-700">
                    Multiple question formats
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.75 0C6.71562 0 7.5 0.784375 7.5 1.75V14.25C7.5 15.2156 6.71562 16 5.75 16C4.84688 16 4.10313 15.3156 4.00938 14.4344C3.84688 14.4781 3.675 14.5 3.5 14.5C2.39687 14.5 1.5 13.6031 1.5 12.5C1.5 12.2688 1.54062 12.0437 1.6125 11.8375C0.66875 11.4812 0 10.5688 0 9.5C0 8.50313 0.584375 7.64062 1.43125 7.24062C1.15937 6.9 1 6.46875 1 6C1 5.04063 1.675 4.24062 2.575 4.04375C2.525 3.87187 2.5 3.6875 2.5 3.5C2.5 2.56562 3.14375 1.77813 4.00938 1.55938C4.10313 0.684375 4.84688 0 5.75 0ZM10.25 0C11.1531 0 11.8938 0.684375 11.9906 1.55938C12.8594 1.77813 13.5 2.5625 13.5 3.5C13.5 3.6875 13.475 3.87187 13.425 4.04375C14.325 4.2375 15 5.04063 15 6C15 6.46875 14.8406 6.9 14.5688 7.24062C15.4156 7.64062 16 8.50313 16 9.5C16 10.5688 15.3313 11.4812 14.3875 11.8375C14.4594 12.0437 14.5 12.2688 14.5 12.5C14.5 13.6031 13.6031 14.5 12.5 14.5C12.325 14.5 12.1531 14.4781 11.9906 14.4344C11.8969 15.3156 11.1531 16 10.25 16C9.28438 16 8.5 15.2156 8.5 14.25V1.75C8.5 0.784375 9.28438 0 10.25 0Z" />
                  </svg>
                  <span className="text-gray-700">
                    AI-powered question suggestions
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-4 text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 18 16"
                  >
                    <path d="M8.26562 0.162695C8.73125 -0.0529297 9.26875 -0.0529297 9.73438 0.162695L16.5656 3.31895C16.8312 3.44082 17 3.70645 17 4.0002C17 4.29395 16.8312 4.55957 16.5656 4.68145L9.73438 7.8377C9.26875 8.05332 8.73125 8.05332 8.26562 7.8377L1.43438 4.68145C1.16875 4.55645 1 4.29082 1 4.0002C1 3.70957 1.16875 3.44082 1.43438 3.31895L8.26562 0.162695ZM14.9031 6.5502L16.5656 7.31895C16.8312 7.44082 17 7.70645 17 8.0002C17 8.29395 16.8312 8.55957 16.5656 8.68145L9.73438 11.8377C9.26875 12.0533 8.73125 12.0533 8.26562 11.8377L1.43438 8.68145C1.16875 8.55645 1 8.29082 1 8.0002C1 7.70957 1.16875 7.44082 1.43438 7.31895L3.09687 6.5502L7.84688 8.74395C8.57812 9.08144 9.42188 9.08144 10.1531 8.74395L14.9031 6.5502ZM10.1531 12.7439L14.9031 10.5502L16.5656 11.3189C16.8312 11.4408 17 11.7064 17 12.0002C17 12.2939 16.8312 12.5596 16.5656 12.6814L9.73438 15.8377C9.26875 16.0533 8.73125 16.0533 8.26562 15.8377L1.43438 12.6814C1.16875 12.5564 1 12.2908 1 12.0002C1 11.7096 1.16875 11.4408 1.43438 11.3189L3.09687 10.5502L7.84688 12.7439C8.57812 13.0814 9.42188 13.0814 10.1531 12.7439Z" />
                  </svg>
                  <span className="text-gray-700">
                    Difficulty level balancing
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:order-1 flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/3eb5b7477d7e99311c9c42518f942df1c6b89bc7?width=768"
                alt="Assessment creation interface"
                className="w-96 h-96 rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Comprehensive Analytics */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Comprehensive Analytics
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Get detailed insights into class performance, individual student
                progress, and curriculum effectiveness with real-time analytics.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 1C1.55313 1 2 1.44687 2 2V12.5C2 12.775 2.225 13 2.5 13H15C15.5531 13 16 13.4469 16 14C16 14.5531 15.5531 15 15 15H2.5C1.11875 15 0 13.8813 0 12.5V2C0 1.44687 0.446875 1 1 1ZM4 4C4 3.44688 4.44688 3 5 3H11C11.5531 3 12 3.44688 12 4C12 4.55312 11.5531 5 11 5H5C4.44688 5 4 4.55312 4 4ZM5 6H9C9.55313 6 10 6.44688 10 7C10 7.55312 9.55313 8 9 8H5C4.44688 8 4 7.55312 4 7C4 6.44688 4.44688 6 5 6ZM5 9H13C13.5531 9 14 9.44687 14 10C14 10.5531 13.5531 11 13 11H5C4.44688 11 4 10.5531 4 10C4 9.44687 4.44688 9 5 9Z" />
                  </svg>
                  <span className="text-gray-700">
                    Real-time performance tracking
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M6.85305 0.0155273C6.94993 -0.00322266 7.04993 -0.00322266 7.1468 0.0155273L13.3968 1.26553C13.7468 1.33428 13.9999 1.64365 13.9999 1.9999C13.9999 2.35615 13.7468 2.66553 13.3968 2.73428L10.9999 3.21553V4.9999C10.9999 7.20928 9.2093 8.9999 6.99993 8.9999C4.79055 8.9999 2.99993 7.20928 2.99993 4.9999V3.21553L1.49993 2.91553V4.9499L1.99055 7.3999C2.01868 7.54678 1.98118 7.6999 1.88743 7.81553C1.79368 7.93115 1.64993 7.9999 1.49993 7.9999H0.499926C0.349926 7.9999 0.209301 7.93428 0.112426 7.81553C0.0155513 7.69678 -0.0219487 7.54678 0.00930126 7.3999L0.499926 4.9499V2.70615C0.203051 2.60303 -7.37386e-05 2.32178 -7.37386e-05 1.9999C-7.37386e-05 1.64365 0.253051 1.33428 0.603051 1.26553L6.85305 0.0155273ZM3.4968 10.2405C3.82493 10.1343 4.17805 10.253 4.41555 10.5062L6.6343 12.8655C6.83118 13.0749 7.16555 13.0749 7.36243 12.8655L9.58118 10.5062C9.81868 10.253 10.1718 10.1343 10.4999 10.2405C12.5312 10.8937 13.9999 12.7937 13.9999 15.0405C13.9999 15.5718 13.5687 15.9999 13.0406 15.9999H0.959301C0.431176 15.9999 -7.37386e-05 15.5687 -7.37386e-05 15.0405C-7.37386e-05 12.7937 1.46868 10.8937 3.4968 10.2405Z" />
                  </svg>
                  <span className="text-gray-700">
                    Individual student insights
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M2 1C2 0.446875 1.55313 0 1 0C0.446875 0 0 0.446875 0 1V2V11.5V15C0 15.5531 0.446875 16 1 16C1.55313 16 2 15.5531 2 15V11L4.00938 10.4969C5.29375 10.175 6.65312 10.325 7.8375 10.9156C9.21875 11.6062 10.8219 11.6906 12.2656 11.1469L13.35 10.7406C13.7406 10.5938 14 10.2219 14 9.80313V2.06562C14 1.34687 13.2438 0.878125 12.6 1.2L12.3 1.35C10.8531 2.075 9.15 2.075 7.70312 1.35C6.60625 0.8 5.34688 0.6625 4.15625 0.959375L2 1.5V1Z" />
                  </svg>
                  <span className="text-gray-700">
                    Early intervention alerts
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/6f1e487ce0be1b15323e9b161e3e779ef12ed833?width=768"
                alt="Analytics dashboard"
                className="w-96 h-96 rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Workflow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Teaching Workflow, Simplified
            </h2>
            <p className="text-xl text-gray-600">
              From course creation to student success tracking
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-7 h-8 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 28 31"
                >
                  <path d="M6.5 0.75C3.39453 0.75 0.875 3.26953 0.875 6.375V25.125C0.875 28.2305 3.39453 30.75 6.5 30.75H23.375H25.25C26.2871 30.75 27.125 29.9121 27.125 28.875C27.125 27.8379 26.2871 27 25.25 27V23.25C26.2871 23.25 27.125 22.4121 27.125 21.375V2.625C27.125 1.58789 26.2871 0.75 25.25 0.75H23.375H6.5ZM6.5 23.25H21.5V27H6.5C5.46289 27 4.625 26.1621 4.625 25.125C4.625 24.0879 5.46289 23.25 6.5 23.25ZM8.375 9.1875C8.375 8.67188 8.79688 8.25 9.3125 8.25H20.5625C21.0781 8.25 21.5 8.67188 21.5 9.1875C21.5 9.70312 21.0781 10.125 20.5625 10.125H9.3125C8.79688 10.125 8.375 9.70312 8.375 9.1875ZM9.3125 12H20.5625C21.0781 12 21.5 12.4219 21.5 12.9375C21.5 13.4531 21.0781 13.875 20.5625 13.875H9.3125C8.79688 13.875 8.375 13.4531 8.375 12.9375C8.375 12.4219 8.79688 12 9.3125 12Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                1. Upload Content
              </h3>
              <p className="text-gray-600">
                Upload your syllabus and course materials
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 30 31"
                >
                  <path d="M27.6328 2.02148C26.3496 0.738281 24.2754 0.738281 22.9922 2.02148L21.2285 3.7793L26.9648 9.51563L28.7285 7.75195C30.0117 6.46875 30.0117 4.39453 28.7285 3.11133L27.6328 2.02148ZM10.1016 14.9121C9.74414 15.2695 9.46875 15.709 9.31055 16.1953L7.57617 21.3984C7.40625 21.9023 7.54102 22.459 7.91602 22.8398C8.29102 23.2207 8.84766 23.3496 9.35742 23.1797L14.5605 21.4453C15.041 21.2871 15.4805 21.0117 15.8438 20.6543L25.6465 10.8457L19.9043 5.10352L10.1016 14.9121ZM5.625 4.5C2.51953 4.5 0 7.01953 0 10.125V25.125C0 28.2305 2.51953 30.75 5.625 30.75H20.625C23.7305 30.75 26.25 28.2305 26.25 25.125V19.5C26.25 18.4629 25.4121 17.625 24.375 17.625C23.3379 17.625 22.5 18.4629 22.5 19.5V25.125C22.5 26.1621 21.6621 27 20.625 27H5.625C4.58789 27 3.75 26.1621 3.75 25.125V10.125C3.75 9.08789 4.58789 8.25 5.625 8.25H11.25C12.2871 8.25 13.125 7.41211 13.125 6.375C13.125 5.33789 12.2871 4.5 11.25 4.5H5.625Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                2. Create Assessments
              </h3>
              <p className="text-gray-600">
                Build tests with AI-generated questions
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-8 text-yellow-600"
                  fill="currentColor"
                  viewBox="0 0 38 31"
                >
                  <path d="M8.6875 0.75C9.9307 0.75 11.123 1.24386 12.0021 2.12294C12.8811 3.00201 13.375 4.1943 13.375 5.4375C13.375 6.6807 12.8811 7.87299 12.0021 8.75206C11.123 9.63114 9.9307 10.125 8.6875 10.125C7.4443 10.125 6.25201 9.63114 5.37294 8.75206C4.49386 7.87299 4 6.6807 4 5.4375C4 4.1943 4.49386 3.00201 5.37294 2.12294C6.25201 1.24386 7.4443 0.75 8.6875 0.75ZM30.25 0.75C31.4932 0.75 32.6855 1.24386 33.5646 2.12294C34.4436 3.00201 34.9375 4.1943 34.9375 5.4375C34.9375 6.6807 34.4436 7.87299 33.5646 8.75206C32.6855 9.63114 31.4932 10.125 30.25 10.125C29.0068 10.125 27.8145 9.63114 26.9354 8.75206C26.0564 7.87299 25.5625 6.6807 25.5625 5.4375C25.5625 4.1943 26.0564 3.00201 26.9354 2.12294C27.8145 1.24386 29.0068 0.75 30.25 0.75ZM0.25 18.252C0.25 14.8008 3.05078 12 6.50195 12H9.00391C9.93555 12 10.8203 12.2051 11.6172 12.5684C11.541 12.9902 11.5059 13.4297 11.5059 13.875C11.5059 16.1133 12.4902 18.123 14.043 19.5C14.0312 19.5 14.0195 19.5 14.002 19.5H1.49805C0.8125 19.5 0.25 18.9375 0.25 18.252ZM23.998 19.5C23.9863 19.5 23.9746 19.5 23.957 19.5C25.5156 18.123 26.4941 16.1133 26.4941 13.875C26.4941 13.4297 26.4531 12.9961 26.3828 12.5684C27.1797 12.1992 28.0645 12 28.9961 12H31.498C34.9492 12 37.75 14.8008 37.75 18.252C37.75 18.9434 37.1875 19.5 36.502 19.5H23.998ZM13.375 13.875C13.375 12.3832 13.9676 10.9524 15.0225 9.89752C16.0774 8.84263 17.5082 8.25 19 8.25C20.4918 8.25 21.9226 8.84263 22.9775 9.89752C24.0324 10.9524 24.625 12.3832 24.625 13.875C24.625 15.3668 24.0324 16.7976 22.9775 17.8525C21.9226 18.9074 20.4918 19.5 19 19.5C17.5082 19.5 16.0774 18.9074 15.0225 17.8525C13.9676 16.7976 13.375 15.3668 13.375 13.875ZM7.75 29.1855C7.75 24.873 11.248 21.375 15.5605 21.375H22.4395C26.752 21.375 30.25 24.873 30.25 29.1855C30.25 30.0469 29.5527 30.75 28.6855 30.75H9.31445C8.45312 30.75 7.75 30.0527 7.75 29.1855Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                3. Monitor Progress
              </h3>
              <p className="text-gray-600">
                Track student performance in real-time
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-6 h-8 text-purple-500"
                  fill="currentColor"
                  viewBox="0 0 24 31"
                >
                  <path d="M16.6875 23.25C17.25 21.3809 18.416 19.7871 19.5703 18.1992C19.875 17.7832 20.1797 17.3672 20.4727 16.9453C21.6328 15.2754 22.3125 13.2539 22.3125 11.0684C22.3125 5.36719 17.6953 0.75 12 0.75C6.30469 0.75 1.6875 5.36719 1.6875 11.0625C1.6875 13.248 2.36719 15.2754 3.52734 16.9395C3.82031 17.3613 4.125 17.7773 4.42969 18.1934C5.58984 19.7812 6.75586 21.3809 7.3125 23.2441H16.6875V23.25ZM12 30.75C14.5898 30.75 16.6875 28.6523 16.6875 26.0625V25.125H7.3125V26.0625C7.3125 28.6523 9.41016 30.75 12 30.75ZM7.3125 11.0625C7.3125 11.5781 6.89062 12 6.375 12C5.85938 12 5.4375 11.5781 5.4375 11.0625C5.4375 7.43555 8.37305 4.5 12 4.5C12.5156 4.5 12.9375 4.92188 12.9375 5.4375C12.9375 5.95312 12.5156 6.375 12 6.375C9.41016 6.375 7.3125 8.47266 7.3125 11.0625Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                4. Provide Insights
              </h3>
              <p className="text-gray-600">
                Share personalized feedback with students
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-studybud-blue-500 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Educators Are Saying
            </h2>
            <p className="text-xl text-blue-100">
              Hear from teachers who've transformed their classrooms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/43cb8c73a768732869b5fb7218e17933088e7ba2?width=96"
                  alt="Dr. Sarah Chen"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Dr. Sarah Chen</h4>
                  <p className="text-gray-600">
                    Math Professor, State University
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                "StudyBud AI has revolutionized how I assess student
                understanding. The insights help me identify struggling students
                weeks earlier than before."
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/9b73dde4179c8b8c24f161a24f19390b3aff500e?width=96"
                  alt="Michael Rodriguez"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Michael Rodriguez</h4>
                  <p className="text-gray-600">High School Science Teacher</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Creating assessments used to take hours. Now I can generate
                comprehensive tests in minutes while maintaining quality and
                alignment."
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b4e6a0c25793c387b3ee9c7b9e2a82d80615fbb8?width=96"
                  alt="Prof. Emily Watson"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    Prof. Emily Watson
                  </h4>
                  <p className="text-gray-600">English Department Head</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The personalized feedback feature has improved student
                engagement dramatically. They actually look forward to receiving
                their reports!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Flexible Plans for Every Institution
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your school's needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Individual Teacher */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Individual Teacher
              </h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-studybud-blue-500">
                  $30
                </span>
                <span className="text-gray-600 ml-1">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M13.7062 3.29395C14.0968 3.68457 14.0968 4.31895 13.7062 4.70957L5.70615 12.7096C5.31553 13.1002 4.68115 13.1002 4.29053 12.7096L0.290527 8.70957C-0.100098 8.31895 -0.100098 7.68457 0.290527 7.29395C0.681152 6.90332 1.31553 6.90332 1.70615 7.29395L4.9999 10.5846L12.2937 3.29395C12.6843 2.90332 13.3187 2.90332 13.7093 3.29395H13.7062Z" />
                  </svg>
                  <span>Up to 150 students</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M13.7062 3.29395C14.0968 3.68457 14.0968 4.31895 13.7062 4.70957L5.70615 12.7096C5.31553 13.1002 4.68115 13.1002 4.29053 12.7096L0.290527 8.70957C-0.100098 8.31895 -0.100098 7.68457 0.290527 7.29395C0.681152 6.90332 1.31553 6.90332 1.70615 7.29395L4.9999 10.5846L12.2937 3.29395C12.6843 2.90332 13.3187 2.90332 13.7093 3.29395H13.7062Z" />
                  </svg>
                  <span>Unlimited assessments</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M13.7062 3.29395C14.0968 3.68457 14.0968 4.31895 13.7062 4.70957L5.70615 12.7096C5.31553 13.1002 4.68115 13.1002 4.29053 12.7096L0.290527 8.70957C-0.100098 8.31895 -0.100098 7.68457 0.290527 7.29395C0.681152 6.90332 1.31553 6.90332 1.70615 7.29395L4.9999 10.5846L12.2937 3.29395C12.6843 2.90332 13.3187 2.90332 13.7093 3.29395H13.7062Z" />
                  </svg>
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M13.7062 3.29395C14.0968 3.68457 14.0968 4.31895 13.7062 4.70957L5.70615 12.7096C5.31553 13.1002 4.68115 13.1002 4.29053 12.7096L0.290527 8.70957C-0.100098 8.31895 -0.100098 7.68457 0.290527 7.29395C0.681152 6.90332 1.31553 6.90332 1.70615 7.29395L4.9999 10.5846L12.2937 3.29395C12.6843 2.90332 13.3187 2.90332 13.7093 3.29395H13.7062Z" />
                  </svg>
                  <span>Email support</span>
                </li>
              </ul>
              <button className="w-full bg-studybud-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-studybud-blue-600 transition-colors">
                Join Our Waitlist
              </button>
            </div>

            {/* School License */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-studybud-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-studybud-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                School License
              </h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-studybud-blue-500">
                  Custom
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M13.7062 3.29395C14.0968 3.68457 14.0968 4.31895 13.7062 4.70957L5.70615 12.7096C5.31553 13.1002 4.68115 13.1002 4.29053 12.7096L0.290527 8.70957C-0.100098 8.31895 -0.100098 7.68457 0.290527 7.29395C0.681152 6.90332 1.31553 6.90332 1.70615 7.29395L4.9999 10.5846L12.2937 3.29395C12.6843 2.90332 13.3187 2.90332 13.7093 3.29395H13.7062Z" />
                  </svg>
                  <span>Up to 50 teachers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M13.7062 3.29395C14.0968 3.68457 14.0968 4.31895 13.7062 4.70957L5.70615 12.7096C5.31553 13.1002 4.68115 13.1002 4.29053 12.7096L0.290527 8.70957C-0.100098 8.31895 -0.100098 7.68457 0.290527 7.29395C0.681152 6.90332 1.31553 6.90332 1.70615 7.29395L4.9999 10.5846L12.2937 3.29395C12.6843 2.90332 13.3187 2.90332 13.7093 3.29395H13.7062Z" />
                  </svg>
                  <span>Unlimited students</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M13.7062 3.29395C14.0968 3.68457 14.0968 4.31895 13.7062 4.70957L5.70615 12.7096C5.31553 13.1002 4.68115 13.1002 4.29053 12.7096L0.290527 8.70957C-0.100098 8.31895 -0.100098 7.68457 0.290527 7.29395C0.681152 6.90332 1.31553 6.90332 1.70615 7.29395L4.9999 10.5846L12.2937 3.29395C12.6843 2.90332 13.3187 2.90332 13.7093 3.29395H13.7062Z" />
                  </svg>
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M13.7062 3.29395C14.0968 3.68457 14.0968 4.31895 13.7062 4.70957L5.70615 12.7096C5.31553 13.1002 4.68115 13.1002 4.29053 12.7096L0.290527 8.70957C-0.100098 8.31895 -0.100098 7.68457 0.290527 7.29395C0.681152 6.90332 1.31553 6.90332 1.70615 7.29395L4.9999 10.5846L12.2937 3.29395C12.6843 2.90332 13.3187 2.90332 13.7093 3.29395H13.7062Z" />
                  </svg>
                  <span>Priority support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M13.7062 3.29395C14.0968 3.68457 14.0968 4.31895 13.7062 4.70957L5.70615 12.7096C5.31553 13.1002 4.68115 13.1002 4.29053 12.7096L0.290527 8.70957C-0.100098 8.31895 -0.100098 7.68457 0.290527 7.29395C0.681152 6.90332 1.31553 6.90332 1.70615 7.29395L4.9999 10.5846L12.2937 3.29395C12.6843 2.90332 13.3187 2.90332 13.7093 3.29395H13.7062Z" />
                  </svg>
                  <span>Admin dashboard</span>
                </li>
              </ul>
              <button className="w-full bg-studybud-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-studybud-blue-600 transition-colors">
                Join Our Waitlist
              </button>
            </div>

            {/* District */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">District</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-studybud-blue-500">
                  Custom
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M13.7062 3.29395C14.0968 3.68457 14.0968 4.31895 13.7062 4.70957L5.70615 12.7096C5.31553 13.1002 4.68115 13.1002 4.29053 12.7096L0.290527 8.70957C-0.100098 8.31895 -0.100098 7.68457 0.290527 7.29395C0.681152 6.90332 1.31553 6.90332 1.70615 7.29395L4.9999 10.5846L12.2937 3.29395C12.6843 2.90332 13.3187 2.90332 13.7093 3.29395H13.7062Z" />
                  </svg>
                  <span>Unlimited everything</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M13.7062 3.29395C14.0968 3.68457 14.0968 4.31895 13.7062 4.70957L5.70615 12.7096C5.31553 13.1002 4.68115 13.1002 4.29053 12.7096L0.290527 8.70957C-0.100098 8.31895 -0.100098 7.68457 0.290527 7.29395C0.681152 6.90332 1.31553 6.90332 1.70615 7.29395L4.9999 10.5846L12.2937 3.29395C12.6843 2.90332 13.3187 2.90332 13.7093 3.29395H13.7062Z" />
                  </svg>
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M13.7062 3.29395C14.0968 3.68457 14.0968 4.31895 13.7062 4.70957L5.70615 12.7096C5.31553 13.1002 4.68115 13.1002 4.29053 12.7096L0.290527 8.70957C-0.100098 8.31895 -0.100098 7.68457 0.290527 7.29395C0.681152 6.90332 1.31553 6.90332 1.70615 7.29395L4.9999 10.5846L12.2937 3.29395C12.6843 2.90332 13.3187 2.90332 13.7093 3.29395H13.7062Z" />
                  </svg>
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M13.7062 3.29395C14.0968 3.68457 14.0968 4.31895 13.7062 4.70957L5.70615 12.7096C5.31553 13.1002 4.68115 13.1002 4.29053 12.7096L0.290527 8.70957C-0.100098 8.31895 -0.100098 7.68457 0.290527 7.29395C0.681152 6.90332 1.31553 6.90332 1.70615 7.29395L4.9999 10.5846L12.2937 3.29395C12.6843 2.90332 13.3187 2.90332 13.7093 3.29395H13.7062Z" />
                  </svg>
                  <span>Training included</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 14 16"
                  >
                    <path d="M13.7062 3.29395C14.0968 3.68457 14.0968 4.31895 13.7062 4.70957L5.70615 12.7096C5.31553 13.1002 4.68115 13.1002 4.29053 12.7096L0.290527 8.70957C-0.100098 8.31895 -0.100098 7.68457 0.290527 7.29395C0.681152 6.90332 1.31553 6.90332 1.70615 7.29395L4.9999 10.5846L12.2937 3.29395C12.6843 2.90332 13.3187 2.90332 13.7093 3.29395H13.7062Z" />
                  </svg>
                  <span>SLA guarantee</span>
                </li>
              </ul>
              <button className="w-full border-2 border-studybud-blue-500 text-studybud-blue-500 py-3 px-4 rounded-lg font-semibold hover:bg-studybud-blue-50 transition-colors">
                Join Our Waitlist
              </button>
            </div>
          </div>
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
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
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
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
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
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
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
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
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
