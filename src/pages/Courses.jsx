import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Clock, User, Award, TrendingUp } from "lucide-react";

// StatCard Component
function StatCard({ title, value, icon }) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-3xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition">
      <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl shadow-lg">
        {React.cloneElement(icon, { className: "w-6 h-6" })}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
}

// Courses Page
export default function Courses() {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "Data Structures & Algorithms",
      code: "CS-301",
      credits: 4,
      teacher: "Dr. Michael Chen",
      attendance: 92,
      grade: "A",
      schedule: "Mon, Wed, Fri - 9:00 AM",
      room: "CS-201",
      progress: 75,
      status: "active",
    },
    {
      id: 2,
      title: "Database Management Systems",
      code: "CS-302",
      credits: 3,
      teacher: "Prof. Emily Rodriguez",
      attendance: 88,
      grade: "A-",
      schedule: "Tue, Thu - 11:00 AM",
      room: "CS-105",
      progress: 80,
      status: "active",
    },
    {
      id: 3,
      title: "Software Engineering",
      code: "CS-303",
      credits: 4,
      teacher: "Dr. James Wilson",
      attendance: 95,
      grade: "A+",
      schedule: "Mon, Wed, Fri - 2:00 PM",
      room: "CS-301",
      progress: 85,
      status: "withdrawn",
    },
    {
      id: 4,
      title: "Computer Networks",
      code: "CS-304",
      credits: 3,
      teacher: "Prof. Lisa Anderson",
      attendance: 78,
      grade: "B+",
      schedule: "Tue, Thu - 3:00 PM",
      room: "CS-205",
      progress: 60,
      status: "active",
    },
  ];

  const [filter, setFilter] = useState("active"); // active / withdrawn / all
  const filteredCourses =
    filter === "all" ? courses : courses.filter((c) => c.status === filter);

  // Compute overall stats
  const totalCredits = courses.reduce((acc, c) => acc + c.credits, 0);
  const avgAttendance = Math.round(
    courses.reduce((acc, c) => acc + c.attendance, 0) / courses.length
  );
  const avgProgress = Math.round(
    courses.reduce((acc, c) => acc + c.progress, 0) / courses.length
  );

  return (
    <div className="space-y-8 px-4 sm:px-6 md:px-8">
      {/* Header with Stats */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl p-6 sm:p-8 text-white shadow-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">My Courses</h1>
        <p className="text-sm sm:text-base text-gray-100 mb-6">
          Current semester courses and progress
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-6">
          <StatCard title="Total Courses" value={courses.length} icon={<BookOpen />} />
          <StatCard title="Total Credits" value={totalCredits} icon={<Award />} />
          <StatCard title="Avg Attendance" value={`${avgAttendance}%`} icon={<TrendingUp />} />
          <StatCard title="Avg Progress" value={`${avgProgress}%`} icon={<Clock />} />
        </div>
      </div>

      {/* Main Content: Courses + Filter */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 flex-1">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              onClick={() => navigate(`/courses/${course.id}`)}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer w-full"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {course.title}
                </h3>
                <span
                  className={`px-3 py-1 text-xs sm:text-sm font-medium rounded-full ${
                    course.status === "active"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {course.status === "active" ? "Active" : "Withdrawn"}
                </span>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <User className="w-4 h-4" />
                  <span className="text-sm sm:text-base">{course.teacher}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm sm:text-base">{course.schedule}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Award className="w-4 h-4" />
                  <span className="text-sm sm:text-base">
                    {course.credits} Credits • Room {course.room}
                  </span>
                </div>
              </div>

              {/* Progress */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm sm:text-base font-medium text-gray-700">
                      Course Progress
                    </span>
                    <span className="text-sm sm:text-base text-gray-500">
                      {course.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Attendance */}
                <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-50 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-gray-600" />
                    <span className="text-sm sm:text-base font-medium text-gray-700">
                      Attendance
                    </span>
                  </div>
                  <span
                    className={`font-semibold text-sm sm:text-base ${getAttendanceColor(
                      course.attendance
                    )}`}
                  >
                    {course.attendance}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Panel */}
        <div className="w-full lg:w-64 bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col gap-3 sm:gap-4">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
            Filter Courses
          </h3>
          <button
            className={`w-full text-left px-4 py-2 rounded-lg text-sm sm:text-base ${
              filter === "active"
                ? "bg-teal-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setFilter("active")}
          >
            Active Courses
          </button>
          <button
            className={`w-full text-left px-4 py-2 rounded-lg text-sm sm:text-base ${
              filter === "withdrawn"
                ? "bg-teal-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setFilter("withdrawn")}
          >
            Withdrawn Courses
          </button>
          <button
            className={`w-full text-left px-4 py-2 rounded-lg text-sm sm:text-base ${
              filter === "all"
                ? "bg-teal-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setFilter("all")}
          >
            All Courses
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper function for attendance color
function getAttendanceColor(attendance) {
  if (attendance >= 85) return "text-emerald-600";
  if (attendance >= 75) return "text-amber-600";
  return "text-red-600";
}
