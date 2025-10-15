import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  // login state
  const [userType, setUserType] = useState(localStorage.getItem("userType") || "");
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  // courses
  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem("courses");
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, name: "Web Development", time: "9:00 AM" },
          { id: 2, name: "Data Science", time: "10:00 AM" },
          { id: 3, name: "Artificial Intelligence", time: "11:00 AM" },
          { id: 4, name: "Machine Learning", time: "12:00 PM" },
          { id: 5, name: "Database Management Systems", time: "1:00 PM" },
          { id: 6, name: "Computer Networks", time: "2:00 PM" },
          { id: 7, name: "Operating Systems", time: "3:00 PM" },
          { id: 8, name: "Software Engineering", time: "4:00 PM" },
          { id: 9, name: "Cyber Security", time: "9:30 AM" },
          { id: 10, name: "Cloud Computing", time: "11:30 AM" },
        ];
  });

  const [selectedCourses, setSelectedCourses] = useState(() => {
    const saved = localStorage.getItem("selectedCourses");
    return saved ? JSON.parse(saved) : [];
  });

  // sync data with localStorage
  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem("selectedCourses", JSON.stringify(selectedCourses));
  }, [selectedCourses]);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
    localStorage.setItem("userType", userType);
  }, [isLoggedIn, userType]);

  // handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = loginData;

    if (username === "admin" && password === "admin123") {
      setUserType("admin");
      setIsLoggedIn(true);
    } else if (username === "student" && password === "student123") {
      setUserType("student");
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials! Try admin/admin123 or student/student123");
    }
  };

  // handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType("");
    setLoginData({ username: "", password: "" });
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userType");
  };

  // add new course (admin)
  const handleAddCourse = (e) => {
    e.preventDefault();
    const name = e.target.courseName.value.trim();
    const time = e.target.courseTime.value.trim();

    if (name && time) {
      setCourses([...courses, { id: courses.length + 1, name, time }]);
      e.target.reset();
    }
  };

  // select/deselect course (student)
  const handleCourseSelect = (course) => {
    if (selectedCourses.some((c) => c.id === course.id)) {
      setSelectedCourses(selectedCourses.filter((c) => c.id !== course.id));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  return (
    <div className="app">
      <h1>🎓 Student Course Selection Portal</h1>

      {!isLoggedIn ? (
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={loginData.username}
              onChange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              required
            />
            <button type="submit">Login</button>
          </form>
          <p className="login-hint">
            Use <b>admin/admin123</b> or <b>student/student123</b>
          </p>
        </div>
      ) : (
        <div className="dashboard">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>

          {userType === "admin" ? (
            <>
              <h2>👩‍💼 Admin Dashboard</h2>
              <form onSubmit={handleAddCourse} className="add-course-form">
                <input
                  type="text"
                  name="courseName"
                  placeholder="Course Name"
                  required
                />
                <input
                  type="text"
                  name="courseTime"
                  placeholder="Time (e.g. 10:00 AM)"
                  required
                />
                <button type="submit">Add Course</button>
              </form>

              <h3>Available Courses</h3>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Course</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((c) => (
                    <tr key={c.id}>
                      <td>{c.id}</td>
                      <td>{c.name}</td>
                      <td>{c.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <>
              <h2>🎓 Student Dashboard</h2>
              <h3>Available Courses</h3>
              <ul className="course-list">
                {courses.map((c) => (
                  <li key={c.id}>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedCourses.some((sel) => sel.id === c.id)}
                        onChange={() => handleCourseSelect(c)}
                      />
                      {c.name} — {c.time}
                    </label>
                  </li>
                ))}
              </ul>

              <h3>Your Selected Courses</h3>
              {selectedCourses.length === 0 ? (
                <p>No courses selected yet.</p>
              ) : (
                <ul className="selected-list">
                  {selectedCourses.map((c) => (
                    <li key={c.id}>{c.name}</li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
