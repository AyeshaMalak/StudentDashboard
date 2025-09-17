import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Results from "./pages/Results";
import Courses from "./pages/Courses";
import Users from "./pages/Users";        // ✅ Add Users page
import UserDetail from "./pages/UserDetail"; // ✅ Add UserDetail page
import DateSheet from "./pages/DateSheet";   // ✅ Add DateSheet page

export default function App() {
  return (
    <Routes>
      {/* Layout wrapper */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="results" element={<Results />} />
        <Route path="courses" element={<Courses />} />
        <Route path="users" element={<Users />} /> 
        <Route path="users/:id" element={<UserDetail />} />
        <Route path="datesheet" element={<DateSheet />} /> 
      </Route>
    </Routes>
  );
}
