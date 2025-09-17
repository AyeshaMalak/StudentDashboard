import React from "react";
import useStudentStore from "../store/useStudentStore";
import { BookOpen, Calendar, Clock, User, Award } from "lucide-react";

export default function Dashboard() {
  const { student, courses, todayClasses } = useStudentStore();

  const creditPercentage = Math.round(
    (student.earnedCredits / student.totalCredits) * 100
  );
  const gpaPercentage = Math.round((student.cgpa / 4) * 100);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white shadow-md rounded-3xl p-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          {/* Left Section */}
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-3xl shadow-lg bg-gradient-to-r from-teal-500 to-cyan-500">
              <User className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                {student.name}
              </h1>
              <p className="text-xs sm:text-sm text-gray-500">{student.rollNo}</p>
              <p className="text-xs sm:text-sm text-gray-500">
                Faculty of Information Technology and Computer Science
              </p>
              <div className="mt-3 inline-block bg-gray-100 text-blue-900 font-semibold text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-lg shadow-sm">
                {student.program}
              </div>
            </div>
          </div>

          {/* Right Section - Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full md:w-auto">
            <StatCard
              title="CGPA"
              value={student.cgpa}
              icon={<Award />}
              color="bg-blue-600"
            />
            <StatCard
              title="Earned"
              value={student.earnedCredits}
              icon={<BookOpen />}
              color="bg-green-600"
            />
            <StatCard
              title="Total"
              value={student.totalCredits}
              icon={<Clock />}
              color="bg-purple-600"
            />
            <StatCard
              title="In Progress"
              value={student.inProgress}
              icon={<User />}
              color="bg-pink-600"
            />
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProgressCard
          title="Credit Hours Progress"
          subtitle="Academic Completion"
          percentage={creditPercentage}
          completed={student.earnedCredits}
          remaining={student.totalCredits - student.earnedCredits}
        />
        <ProgressCard
          title="Academic Performance"
          subtitle="Current GPA"
          percentage={gpaPercentage}
          gpa={student.cgpa}
          grade={student.grade}
        />
      </div>

      {/* Today's Classes */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 rounded-xl">
            <Calendar className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
            Today's Classes
          </h3>
        </div>

        {todayClasses.length > 0 ? (
          <div className="overflow-x-auto scroll-smooth pb-4">
            <div className="flex gap-4 min-w-full sm:min-w-max">
              {todayClasses.map((cls) => (
                <div
                  key={cls.id}
                  className="flex-shrink-0 w-full sm:w-[220px] p-4 sm:p-5 rounded-2xl border border-gray-100 bg-gradient-to-r from-gray-50 to-white hover:shadow-md transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                      {cls.title}
                    </h4>
                    <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 sm:px-3 py-1 rounded-full">
                      {cls.room}
                    </span>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{cls.teacher}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{cls.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No classes scheduled for today</p>
          </div>
        )}
      </div>

      {/* Current Courses */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-emerald-100 rounded-xl">
            <BookOpen className="w-5 h-5 text-emerald-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
            Current Courses
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Components
function CircularProgress({
  percentage,
  size = 120,
  strokeWidth = 40,
  color = "rgb(59, 130, 246)",
  bgColor = "rgb(243, 244, 246)",
  children,
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={bgColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}



function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-white rounded-xl w-full sm:w-[130px] h-auto sm:h-[110px] p-3 flex flex-col justify-center shadow-sm border border-gray-100 hover:shadow-md transition">
      <div className="flex items-center gap-3">
        <div className={`p-2 ${color} text-white rounded-lg shadow`}>
          {React.cloneElement(icon, { className: "w-5 h-5" })}
        </div>
        <div>
          <p className="text-xs text-gray-500">{title}</p>
          <p className="text-sm sm:text-lg font-bold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  );
}

function ProgressCard({
  title,
  subtitle,
  percentage,
  completed,
  remaining,
  gpa,
  grade,
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="text-center mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">
          {title}
        </h3>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>

      <div className="flex justify-center mb-4">
        <CircularProgress
          percentage={percentage}
          size={140}
          strokeWidth={12}
          color="rgb(16, 185, 129)"
          bgColor="rgb(243, 244, 246)"
        >
          <div className="text-center">
            <div className="text-lg sm:text-2xl font-bold text-gray-800">
              {gpa ?? `${percentage}%`}
            </div>
            <div className="text-xs text-gray-500">
              {gpa ? "/ 4.0" : "Complete"}
            </div>
          </div>
        </CircularProgress>
      </div>

      <div className="space-y-2 text-xs sm:text-sm">
        {completed !== undefined && (
          <>
            <div className="flex justify-between">
              <span className="text-gray-600">Completed</span>
              <span className="font-semibold text-gray-800">{completed} hrs</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Remaining</span>
              <span className="font-semibold text-gray-800">{remaining} hrs</span>
            </div>
          </>
        )}
        {gpa && (
          <>
            <div className="flex justify-between">
              <span className="text-gray-600">Current GPA</span>
              <span className="font-semibold text-gray-800">{gpa}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Letter Grade</span>
              <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg text-xs">
                {grade}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <div className="p-4 sm:p-6 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <h4 className="font-semibold text-gray-800 text-sm sm:text-base leading-tight">
          {course.title}
        </h4>
        <CircularProgress
          percentage={course.attendance}
          size={50}
          strokeWidth={6}
          color={getAttendanceColor(course.attendance, true)}
          bgColor="rgb(243, 244, 246)"
        >
          <div className="text-center">
            <div className="text-[10px] sm:text-xs font-bold text-gray-700">
              {course.attendance}%
            </div>
          </div>
        </CircularProgress>
      </div>

      <div className="space-y-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-gray-600">
          <User className="w-4 h-4" />
          <span>{course.teacher}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Award className="w-4 h-4" />
          <span>{course.credits} Credits</span>
        </div>
        <div className="pt-2 border-t border-gray-100">
          <span className="text-xs text-gray-500">Attendance</span>
          <div
            className={`font-medium ${getAttendanceColor(course.attendance)}`}
          >
            {course.attendance >= 85
              ? "Excellent"
              : course.attendance >= 75
              ? "Good"
              : "Poor"}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helpers
function getAttendanceColor(attendance, isRgb = false) {
  if (attendance >= 85)
    return isRgb ? "rgb(16, 185, 129)" : "text-emerald-600";
  if (attendance >= 75)
    return isRgb ? "rgb(245, 158, 11)" : "text-amber-600";
  return isRgb ? "rgb(239, 68, 68)" : "text-red-600";
}
