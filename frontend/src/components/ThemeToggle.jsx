import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ThemeToggle() {
  
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
    
  }
const token = localStorage.getItem("token");
  return (
    <div className="p-4 flex justify-between">
      <button
        onClick={() => [setDarkMode(!darkMode),window.location.reload()]}
        className="p-2 bg-gray-700 dark:bg-gray-700 rounded text-white"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      {token && (
        <button onClick={handleLogout} className="p-2 bg-red-500 dark:bg-gray-700 rounded text-white">
          Logout
        </button>
      )}
    </div>
  );
}
