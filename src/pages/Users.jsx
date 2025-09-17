import React from "react";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const navigate = useNavigate();

  const users = [
    { id: 1, name: "Saad Ali", role: "Student", email: "saad.ali@example.com", cgpa: 3.75 },
    { id: 2, name: "Ayesha Malak", role: "Student", email: "ayesha@example.com", cgpa: 3.85 },
    { id: 3, name: "Babar Azam", role: "Instructor", email: "babar.azam@example.com", cgpa: 0 },
    { id: 4, name: "Haris Rauf", role: "Instructor", email: "haris.rauf@example.com", cgpa: 0 },
    { id: 5, name: "Fatima Khan", role: "Student", email: "fatima.khan@example.com", cgpa: 3.65 },
    { id: 6, name: "Ali Raza", role: "Student", email: "ali.raza@example.com", cgpa: 3.90 },
  ];

  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl p-8 text-white shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Users</h1>
        <p className="text-gray-100">All registered users in the system</p>
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-3xl shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300"
          >
            {/* Card Header */}
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-t-3xl p-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-teal-500 text-xl font-bold shadow-md">
                {user.name[0]}
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold">{user.name}</h3>
                <p className="text-gray-200 text-sm">{user.role}</p>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 space-y-3">
              <p className="text-gray-600 text-sm">
                <span className="font-medium">Email:</span> {user.email}
              </p>
              {user.cgpa > 0 && (
                <p className="text-gray-600 text-sm">
                  <span className="font-medium">CGPA:</span> {user.cgpa}
                </p>
              )}

              {/* View Profile Button */}
              <button
                onClick={() => navigate(`/users/${user.id}`)}
                className="mt-4 w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-2.5 rounded-xl font-medium hover:opacity-90 transition"
              >
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
