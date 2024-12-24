import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="p-8 max-w-lg w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        {isLogin ? <Login /> : <Register />}
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:underline"
          >
            {isLogin
              ? "Need an account? Register"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
