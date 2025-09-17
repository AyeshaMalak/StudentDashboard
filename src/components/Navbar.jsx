import { useState } from "react";
import { 
  Menu, 
  Bell, 
  Search, 
  Settings, 
  User,
  ChevronDown,
  LogOut
} from "lucide-react";

export default function Navbar({ onMenuClick }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, title: "Assignment Due", message: "Data Structures assignment due tomorrow", time: "2 hours ago" },
    { id: 2, title: "Grade Posted", message: "Your Database exam grade is available", time: "1 day ago" },
    { id: 3, title: "Class Cancelled", message: "Software Engineering class cancelled today", time: "2 days ago" },
  ];

  return (
    <header className="bg-white px-4 md:px-6 py-4 shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between text-gray-800">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu className="w-6 h-6 text-green-600" />
          </button>
          
          <div className="hidden md:block">
            <h1 className="text-2xl font-bold text-from-teal-500 to-cyan-500">Dashboard</h1>
            <p className="text-sm text-gray-500">Welcome back, Ayesha!</p>
          </div>
        </div>

        {/* Center - Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search courses, assignments..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-50 border border-gray-200 placeholder-gray-400 text-gray-700 focus:bg-white focus:ring-2 focus:ring-green-500 focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Mobile search */}
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <Search className="w-5 h-5 text-green-600" />
          </button>

          {/* Notifications (hidden on mobile) */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors relative"
            >
              <Bell className="w-5 h-5 text-green-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {showNotifications && (
              <div
                className="absolute right-0 mt-2 w-80 max-h-[70vh] bg-white rounded-xl shadow-lg border border-gray-200 z-50 flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="p-4 border-b border-gray-100">
                  <h3 className="font-semibold text-green-600">Notifications</h3>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors"
                    >
                      <h4 className="font-medium text-sm text-green-700">{notification.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                      <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-3 border-t border-gray-100">
                  <button className="w-full text-center text-green-600 text-sm font-medium hover:text-green-700 transition-colors">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Settings */}
          <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <Settings className="w-5 h-5 text-green-600" />
          </button>

          {/* Profile dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <ChevronDown className="w-4 h-4 text-green-600" />
            </button>

            {showProfileMenu && (
              <div 
                className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 z-50"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-3 border-b border-gray-100">
                  <p className="font-medium text-green-700">Ayesha Malak</p>
                  <p className="text-sm text-gray-500">CS-2021-101</p>
                </div>
                <div className="py-2">
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    <User className="w-4 h-4 text-green-600" />
                    Profile
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    <Settings className="w-4 h-4 text-green-600" />
                    Settings
                  </button>
                  <hr className="my-2 border-gray-100" />
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors">
                    <LogOut className="w-4 h-4" />
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Close dropdowns when clicking outside */}
      {(showProfileMenu || showNotifications) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setShowProfileMenu(false);
            setShowNotifications(false);
          }}
        />
      )}
    </header>
  );
}
