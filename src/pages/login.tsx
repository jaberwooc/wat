import React from "react";

const Login = () => {
  return (
    <div>
      {/* make a floating div in the center */}
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-sm w-full space-y-4">
          <div className="flex items-center space-x-4">
            <div className="h-14 w-14 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              A
            </div>
            <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
              <h2 className="leading-relaxed">Login</h2>
              <p className="text-sm text-gray-500 font-normal leading-relaxed">
                Enter your credentials to continue.
              </p>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-blue-500 hover:text-blue-400"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
