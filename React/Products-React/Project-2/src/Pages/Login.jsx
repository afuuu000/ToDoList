import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/sign");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-slate-400">
      <div className="flex flex-col md:flex-row w-full max-w-4xl rounded-lg shadow-lg bg-white">
        

        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Log In</h2>

      
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Enter a valid email",
                  },
                })}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" },
                })}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 text-white bg-gray-800 rounded-md hover:bg-gray-950"
            >
              Log In
            </button>
          </form>

        
          <p className="text-center text-gray-500 mt-6">
            Don’t have an account?
            <a href="" onClick={handleClick} className="text-blue-500 hover:underline ml-2">
              Create an account
            </a>
          </p>
        </div>

        
        <div className="hidden md:flex md:w-1/2 items-center justify-center bg-gray-800 rounded-r-lg">
          <img src="../../login.png" alt="This may not uploaded correctly" />
        </div>
      </div>
    </div>
  );
}

export default Login;
