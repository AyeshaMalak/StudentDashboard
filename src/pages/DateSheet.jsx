import React from "react";
import { Calendar, Clock, MapPin, User } from "lucide-react";

export default function DateSheet() {
  const exams = [
    { id: 1, course: "OOP", instructor: "Babar Azam", date: "2024-07-13", time: "12:00 - 14:00", venue: "A-008" },
    { id: 2, course: "COAL", instructor: "Virat Kohli", date: "2024-07-14", time: "12:00 - 14:00", venue: "A-010" },
    { id: 3, course: "MVC", instructor: "Haris Rauf", date: "2024-07-15", time: "10:00 - 12:00", venue: "B-108" },
    { id: 4, course: "Database Systems", instructor: "Steve Smith", date: "2024-07-16", time: "09:00 - 11:00", venue: "A-012" },
    { id: 5, course: "Networking", instructor: "Shadab Khan", date: "2024-07-17", time: "11:00 - 13:00", venue: "B-101" },
    { id: 6, course: "AI", instructor: "Babar Azam", date: "2024-07-18", time: "14:00 - 16:00", venue: "C-201" },
    { id: 7, course: "Web Development", instructor: "Virat Kohli", date: "2024-07-19", time: "10:00 - 12:00", venue: "A-020" },
    { id: 8, course: "Software Engineering", instructor: "Haris Rauf", date: "2024-07-20", time: "12:00 - 14:00", venue: "B-110" },
  ];

  const gradientClass = "from-teal-400 to-teal-600"; // Same gradient for all cards

  return (
   
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 shadow-lg rounded-3xl p-6 md:p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">DateSheet - Spring 2025</h1>
          <p className="text-gray-100">Upcoming exams schedule</p>
        </div>

        {/* Exam Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {exams.map((exam) => (
            <div
              key={exam.id}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
            >
              {/* Full-width gradient header */}
              <div className={`h-4 rounded-t-3xl bg-gradient-to-r ${gradientClass}`} />

              <div className="p-6 flex-1 flex flex-col justify-between">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">{exam.course}</h3>

                {/* Instructor */}
                <div className="flex items-center mb-4 text-gray-700">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${gradientClass} mr-4`}>
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium mr-2">Instructor:</span> {exam.instructor}
                </div>

                {/* Date */}
                <div className="flex items-center mb-4 text-gray-700">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${gradientClass} mr-4`}>
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium mr-2">Date:</span> {exam.date}
                </div>

                {/* Time */}
                <div className="flex items-center mb-4 text-gray-700">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${gradientClass} mr-4`}>
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium mr-2">Time:</span> {exam.time}
                </div>

                {/* Venue */}
                <div className="flex items-center text-gray-700">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${gradientClass} mr-4`}>
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium mr-2">Venue:</span> {exam.venue}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
   
  );
}
