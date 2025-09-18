import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Award, Mail, BookOpen, Target, User } from "lucide-react";

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const users = [
    { 
      id: 1, 
      name: "Saad Ali", 
      role: "Student", 
      email: "saad.ali@example.com", 
      cgpa: 3.75,
      department: "Computer Science",
      bio: "Passionate about web development and AI. Enjoys solving challenging problems and contributing to open-source projects.",
      totalCredits: 50,
      completedCourses: 15
    },
    { 
      id: 2, 
      name: "Ayesha Malak", 
      role: "Student", 
      email: "ayesha@example.com", 
      cgpa: 3.85,
      department: "Software Engineering",
      bio: "Focused on full-stack development and modern UI/UX design. Loves learning new frameworks and building projects from scratch.",
      totalCredits: 52,
      completedCourses: 16
    },
    { 
      id: 3, 
      name: "Babar Azam", 
      role: "Instructor", 
      email: "babar.azam@example.com", 
      cgpa: 0,
      department: "Mathematics",
      bio: "Experienced instructor in mathematics and statistics, dedicated to helping students achieve their academic goals."
    },
    { 
      id: 4, 
      name: "Haris Rauf", 
      role: "Instructor", 
      email: "haris.rauf@example.com", 
      cgpa: 0,
      department: "Physics",
      bio: "Dedicated physics instructor with interest in theoretical physics and student mentoring."
    },
    { 
      id: 5, 
      name: "Fatima Khan", 
      role: "Student", 
      email: "fatima.khan@example.com", 
      cgpa: 3.65,
      department: "Electrical Engineering",
      bio: "Interested in embedded systems and circuit design. Always eager to learn and innovate.",
      totalCredits: 48,
      completedCourses: 14
    },
    { 
      id: 6, 
      name: "Ali Raza", 
      role: "Student", 
      email: "ali.raza@example.com", 
      cgpa: 3.90,
      department: "Software Engineering",
      bio: "Specializes in backend development and cloud computing. Loves building scalable applications.",
      totalCredits: 55,
      completedCourses: 18
    },
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
        User not found
      </div>
    );
  }

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        className="flex items-center gap-2 text-white bg-gradient-to-r from-teal-400 to-cyan-500 px-4 py-2 rounded-full shadow-md hover:opacity-90 transition"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft /> Back
      </button>

      {/* Header */}
      <div className="mt-6 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-3xl p-6 shadow-xl flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-teal-600 font-bold text-2xl flex-shrink-0">
          {initials}
        </div>
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold">{user.name}</h2>
          <p className="mt-2 flex items-center gap-2 text-sm sm:text-base">
            <Mail className="text-white" /> {user.email}
          </p>
          <p className="mt-1 flex items-center gap-2 text-sm sm:text-base">
            <Target className="text-white" /> Role: {user.role}
          </p>
          {user.role === "Student" && (
            <p className="mt-1 flex items-center gap-2 text-sm sm:text-base">
              <Award className="text-white" /> CGPA: {user.cgpa}
            </p>
          )}
        </div>
      </div>

      {/* Stats Cards */}
      {user.role === "Student" && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-2xl shadow-lg flex flex-col items-center">
            <span className="text-3xl font-bold text-teal-500">{user.cgpa}</span>
            <p className="mt-1 text-gray-600 text-center">CGPA</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-lg flex flex-col items-center">
            <span className="text-3xl font-bold text-teal-500">{user.totalCredits}</span>
            <p className="mt-1 text-gray-600 text-center">Total Credits</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-lg flex flex-col items-center">
            <span className="text-3xl font-bold text-teal-500">{user.completedCourses}</span>
            <p className="mt-1 text-gray-600 text-center">Completed Courses</p>
          </div>
        </div>
      )}

      {/* About Section */}
      <div className="mt-6 bg-white p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3">About</h3>
        {user.bio && <p className="text-gray-700 mb-2">{user.bio}</p>}
        {user.department && (
          <p className="text-gray-600">
            <span className="font-semibold">Department:</span> {user.department}
          </p>
        )}
      </div>

      {/* Semesters */}
      {user.role === "Student" && (
        <div className="mt-6">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center gap-2 text-gray-700">
            <BookOpen /> Semesters
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {semesters.map((sem) => (
              <div
                key={sem.id}
                className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition"
              >
                <p className="font-semibold text-gray-800">{sem.term}</p>
                <p className="text-gray-600">GPA: {sem.gpa}</p>
                <p className="text-gray-600">Credits: {sem.credits}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
