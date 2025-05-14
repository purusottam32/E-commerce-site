import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex w-full max-w-4xl bg-white shadow-md rounded-md overflow-hidden">
        
        {/* Left Blue Section */}
        <div className="w-1/2 bg-[#2874F0] text-white p-8 hidden md:flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <p className="text-sm">
              Get access to your Orders, Wishlist and Recommendations
            </p>
          </div>
          <img
            src="./src/assets/clickkart.jpg" // Use the same image as in the screenshot
            alt="Login Visual"
            className="w-64 mx-auto mt-8 object-contain mix-blend-multiply"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <input
            type="text"
            placeholder="Enter Email/Mobile number"
            className="border-b border-gray-400 w-full outline-none text-sm py-2 mb-6"
          />
          <p className="text-xs text-gray-500 mb-4">
            By continuing, you agree to Flipkart’s{" "}
            <span className="text-blue-600 cursor-pointer">Terms of Use</span> and{" "}
            <span className="text-blue-600 cursor-pointer">Privacy Policy</span>.
          </p>
          <button className="bg-orange-500 text-white w-full py-2 text-sm font-semibold rounded-sm">
            Request OTP
          </button>
          <p className="text-center mt-6 text-sm text-blue-600 font-semibold cursor-pointer">
            New to Flipkart? Create an account
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
