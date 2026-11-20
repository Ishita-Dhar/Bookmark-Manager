
import { Eye, EyeOff,LockKeyhole,Mail,LetterG, GitBranchPlus} from "lucide-react";
import React, { useState } from "react";
import { FcGoogle} from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { NavLink } from "react-router-dom";


function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful!");
  };

  return (
    <div className="min-h-screen bg-[#f5f6f4] flex flex-col items-center justify-center px-4 py-8">

      {/* Login Card */}
      <div className="w-full max-w-117.5 bg-white/70 border border-gray-200 rounded-2xl shadow-sm px-7 sm:px-11 py-9">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#07558b] mb-3">
            Welcome Back
          </h1>

          <p className="text-gray-700 text-sm leading-5">
            Access, organize and query your intelligent web
            <br />
            bookmarks seamlessly
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className="mb-7">
            <label className="block text-gray-900 font-semibold text-sm mb-2">
              Email / Mobile Number
            </label>
            <span className=" relative">
            <Mail size={17} strokeWidth={0.75} className=" absolute top-1/2 left-2 -translate-y-1/2 text-gray-600 text-sm" />
            </span>
            <input
              type="text"
              placeholder="Enter email or mobile number"
              className="w-full h-13.5 border border-gray-400 rounded-sm px-4 pl-8 outline-none focus:border-blue-600 text-sm"
              required
              />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-900 font-semibold text-sm mb-2">
              Password
            </label>

            <div className=" relative ">
              <span className=" absolute left-2 top-1/2 -translate-y-1/2 text-gray-600 text-sm">
                <LockKeyhole size={17} strokeWidth={0.75} />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full h-13.5 border border-gray-400 rounded-sm px-4 pr-12 pl-8 outline-none focus:border-blue-600 text-sm"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 text-sm"
              >
                {showPassword ? <Eye size={19}/> : <EyeOff size={19}/>}
              </button>
            </div>
          </div>

          {/* Remember and Forgot */}
          <div className="flex justify-between items-center mb-7 text-sm">

            <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4.5 h-4.5 accent-blue-600"
              />
              Remember me
            </label>

            <a
              href="/forgot-password"
              className="text-gray-700 hover:text-blue-700 underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Sign In */}
          <button
            type="submit"
            className="w-full h-15 bg-[#0866b5] hover:bg-[#07549a] text-white font-bold rounded-lg transition duration-200"
          >
            Sign In
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-8">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-600 text-sm whitespace-nowrap">
            Or continue with
          </span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-4 relative">
         
          <button
            type="button"
            className="h-13.5 border border-gray-200 rounded-lg text-gray-800 text-sm font-medium hover:bg-gray-100 transition"
            ><FcGoogle size={25} className=" absolute left-9 top-1/4"/>
            <a href="https://google.com">Google</a>
          </button>

          <button
            type="button"
            className="h-13.5 border border-gray-200 rounded-lg text-gray-800 text-sm font-medium hover:bg-gray-100 transition"
            ><FaGithub size={25} className=" absolute right-30 top-1/4"/>
            <a href="https://github.com">GitHub</a>
          </button>

        </div>
      </div>

      {/* Footer */}
      <div className="mt-14 text-center text-sm text-gray-600">
        Need help?{" "}
        <a
          href="mailto:support@example.com"
          className="hover:text-blue-700 font-medium"
        >
          Contact Support
        </a>
      </div>

    </div>
  );
}

export default App;