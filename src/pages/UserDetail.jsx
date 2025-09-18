import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Award, User, Mail, BookOpen, Target } from "lucide-react";

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
        User not found
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto">
      <button
        className="flex items-center gap-2 text-blue-600 mb-4"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft /> Back
      </button>

      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
          <User /> {user.name}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-1 flex items-center gap-1">
          <Mail /> {user.email}
        </p>
        <p className="text-gray-600 text-sm sm:text-base mb-1 flex items-center gap-1">
          <Target /> Role: {user.role}
        </p>
        {user.role === "Student" && (
          <p className="text-gray-600 text-sm sm:text-base mb-4 flex items-center gap-1">
            <Award /> CGPA: {user.cgpa}
          </p>
        )}

        {user.role === "Student" && (
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 flex items-center gap-2">
              <BookOpen /> Semesters
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {semesters.map((sem) => (
                <div
                  key={sem.id}
                  className="p-3 border rounded-lg hover:bg-gray-50 transition"
                >
                  <p className="font-semibold text-sm sm:text-base">{sem.term}</p>
                  <p className="text-sm sm:text-base">GPA: {sem.gpa}</p>
                  <p className="text-sm sm:text-base">Credits: {sem.credits}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
