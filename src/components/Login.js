import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4 font-semibold">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-md px-3 py-2 mb-3"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-md px-3 py-2 mb-3"
          required
        />
        <Link to="/ContentCatalogue">
          <button
            className="w-full bg-blue-500 text-white rounded-md py-2"
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
