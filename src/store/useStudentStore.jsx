// src/store/useStudentStore.jsx
import { create } from 'zustand';

const useStudentStore = create(() => ({
  student: {
    name: "AYESHA MALAK",
    id: "LIPCSBS56",
    program: "BS Computer Science",
    cgpa: 3.23,
    gpa: 3.37,
    grade: "B+",
    earnedCredits: 69,
    totalCredits: 133,
    inProgress: 10,
  },
  todayClasses: [
    {
      id: 1,
      title: "Web Application Development",
      teacher: "Asad Kamal",
      time: "09:00 AM - 10:30 AM",
      room: "Lab 1",
    },
    {
      id: 2,
      title: "Operating Systems",
      teacher: "Dr Adnan Ghafoor",
      time: "11:00 AM - 12:30 PM",
      room: "Lecture Hall",
    },
  ],
  courses: [
    {
      id: 1,
      title: "Web Application Development",
      credits: 3,
      attendance: 86,
      teacher: "Asad Kamal",
    },
    {
      id: 2,
      title: "Operating Systems - Lab",
      credits: 1,
      attendance: 90,
      teacher: "Qaisar Aslam",
    },
    {
      id: 3,
      title: "Operating Systems",
      credits: 3,
      attendance: 81,
      teacher: "Dr Adnan Ghafoor",
    },
    {
      id: 4,
      title: "Intro to Software Engineering",
      credits: 3,
      attendance: 79,
      teacher: "Muhammad Basti Ali Gillani",
    },
  ],
}));

export default useStudentStore;
