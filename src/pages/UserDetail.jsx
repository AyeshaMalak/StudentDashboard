import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Award, User, Mail, BookOpen, TrendingUp, Target } from "lucide-react";

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const users = [
    { id: 1, name: "Saad Ali", role: "Student", email: "saad.ali@example.com", cgpa: 3.75 },
    { id: 2, name: "Ayesha Malak", role: "Student", email: "ayesha@example.com", cgpa: 3.85 },
    { id: 3, name: "Babar Azam", role: "Instructor", email: "babar.azam@example.com", cgpa: 0 },
    { id: 4, name: "Haris Rauf", role: "Instructor", email: "haris.rauf@example.com", cgpa: 0 },
    { id: 5, name: "Fatima Khan", role: "Student", email: "fatima.khan@example.com", cgpa: 3.65 },
    { id: 6, name: "Ali Raza", role: "Student", email: "ali.raza@example.com", cgpa: 3.90 },
  ];

  const semesters = [
    { id: 1, term: "Fall 2023", gpa: 3.80, credits: 15 },
    { id: 2, term: "Spring 2024", gpa: 3.70, credits: 18 },
    { id: 3, term: "Fall 2024", gpa: 3.85, credits: 17 },
  ];

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return (
      <div className="p-6 text-center text-red-600 font-semibold">
        ❌ User not found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-8 space-y-10">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-teal-600 mb-4 transition"
      >
        <ArrowLeft size={18} />
        Back to Users
      </button>

      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl p-10 text-white shadow-lg">
        <div className="flex items-center gap-6">
          <div className="w-28 h-28 rounded-full bg-white text-teal-600 flex items-center justify-center text-4xl font-bold shadow-md">
            {user.name[0]}
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{user.name}</h1>
            <p className="text-gray-100 text-lg">{user.role}</p>
            <p className="text-gray-200">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {user.cgpa > 0 && (
          <div className="p-6 bg-white rounded-2xl shadow-md flex items-center gap-4 border border-gray-100">
            <Award className="w-10 h-10 text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">CGPA</p>
              <h2 className="text-2xl font-bold text-gray-800">{user.cgpa}</h2>
            </div>
          </div>
        )}
        <div className="p-6 bg-white rounded-2xl shadow-md flex items-center gap-4 border border-gray-100">
          <Mail className="w-10 h-10 text-green-600" />
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <h2 className="text-lg font-medium text-gray-800">{user.email}</h2>
          </div>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-md flex items-center gap-4 border border-gray-100">
          <User className="w-10 h-10 text-purple-600" />
          <div>
            <p className="text-sm text-gray-500">Role</p>
            <h2 className="text-lg font-medium text-gray-800">{user.role}</h2>
          </div>
        </div>
      </div>

      {/* About Me */}
      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          {user.role === "Student"
            ? `${user.name} is a dedicated student with excellent academic performance. Currently maintaining a CGPA of ${user.cgpa}, actively participating in coursework, and working towards professional growth.`
            : `${user.name} is a passionate instructor who helps students achieve academic excellence and contributes to the institution's growth.`}
        </p>
      </div>

      {/* Semesters Section */}
      {user.role === "Student" && (
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Semester Records</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {semesters.map((sem) => (
              <div
                key={sem.id}
                className="p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition bg-gradient-to-r from-teal-50 to-cyan-50"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">{sem.term}</h3>
                <p className="text-gray-600 mb-2">Credits Earned: {sem.credits}</p>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-gray-700">GPA: {sem.gpa}</span>
                </div>
                {/* Progress Bar */}
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full"
                    style={{ width: `${(sem.gpa / 4) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Academic Goals */}
      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Academic Goals</h2>
        <div className="flex items-start gap-4">
          <Target className="w-10 h-10 text-red-500" />
          <p className="text-gray-600 leading-relaxed">
            {user.role === "Student"
              ? "Focused on improving research skills, preparing for final year project, and aiming for higher CGPA with consistent performance."
              : "Committed to guiding students, enhancing teaching methods, and contributing to academic research and publications."}
          </p>
        </div>
      </div>
    </div>
  );
}
