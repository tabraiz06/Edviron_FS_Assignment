import AppRouter from "./router/AppRouter";
import "./index.css";
import ThemeToggle from "./components/ThemeToggle";
import { useEffect, useState } from "react";

export default function App() {
 
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark" ? "dark" : "light");
  useEffect(() => { 
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
   }, [localStorage.getItem("theme")]); 
  
    
  
  return (
    <div
      className={`min-h-screen bg-gray-100 dark:bg-dark text-gray-900 dark:text-gray-100 ${localStorage.getItem(
        "theme"
      )}`}
    >
      <ThemeToggle />
      <AppRouter />
      
    </div>
  );
}
