import react from "react";
import { useState } from "react";

const Signup =()=>{
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
      const submitHandler = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Signup Data:", formData);
    alert("Signup Successful!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
  };

    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-indigo-300 via-white to-purple-300">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/50 shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_25px_70px_rgba(0,0,0,0.19)]">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Create Your Profile
          </h1>
          <p className="text-gray-500 text-center mb-8">
            Sign up to manage your bookmarks
          </p>

          <form onSubmit={submitHandler} className="space-y-5">
            <div className="flex gap-x-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={formData.firstName}
                onChange={changeHandler}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={formData.lastName}
                onChange={changeHandler}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={changeHandler}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-x-4">
              <input
                type="password"
                name="password"
                placeholder="Password*"
                value={formData.password}
                onChange={changeHandler}
                required
                minLength={6}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password*"
                value={formData.confirmPassword}
                onChange={changeHandler}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    );
}
export default Signup;