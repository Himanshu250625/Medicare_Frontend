import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Handle login/signup logic here
    console.log({ name, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form 
        className="flex flex-col gap-6 p-8 bg-white rounded-lg shadow-lg min-w-[340px] sm:min-w-[400px]" 
        onSubmit={onSubmitHandler}
      >
        <h2 className="text-2xl font-semibold text-center">
          {state === 'Sign Up' ? "Create Account" : "Login"}
        </h2>
        <p className="text-center text-gray-600">
          Please {state === 'Sign Up' ? "sign up" : "log in"} to book an appointment.
        </p>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)} // Use e.target.value
            value={name}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {state === 'Sign Up' && ( // Show email input only for Sign Up
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)} // Use e.target.value
              value={email}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)} // Use e.target.value
            value={password}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <button 
          type="submit" 
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          {state === 'Sign Up' ? "Create Account" : "Login"}
        </button>
        
        <p className="text-center text-sm text-gray-600 mt-4">
          {state === 'Sign Up' ? (
            <span>
              Already have an account? 
              <button 
                type="button" 
                onClick={() => setState("Login")} 
                className="text-blue-500 hover:underline"
              >
                Login here
              </button>
            </span>
          ) : (
            <span>
              Don't have an account? 
              <button 
                type="button" 
                onClick={() => setState("Sign Up")} 
                className="text-blue-500 hover:underline"
              >
                Create an account
              </button>
            </span>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
