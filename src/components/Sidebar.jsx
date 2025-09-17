import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  BookOpen,
  Users,
  FileText,
} from "lucide-react";

export default function Sidebar({ isOpen, onClose }) {
  const links = [
    { to: "/", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
    { to: "/attendance", label: "Attendance", icon: <Calendar className="w-5 h-5" /> },
    { to: "/results", label: "Results", icon: <FileText className="w-5 h-5" /> },
    { to: "/courses", label: "Courses", icon: <BookOpen className="w-5 h-5" /> },
    { to: "/users", label: "Users", icon: <Users className="w-5 h-5" /> },
    { to: "/datesheet", label: "Date Sheet", icon: <Calendar className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Backdrop for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-30 transition-opacity md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed md:fixed inset-y-0 left-0 z-40 w-64 h-screen bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0`}
      >
        {/* Logo / Title */}
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-6 text-2xl font-bold text-white shadow-md">
          My Dashboard
        </div>

        {/* Nav Links */}
        <nav className="px-4 py-6 space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-xl transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-md"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
              onClick={onClose}
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
