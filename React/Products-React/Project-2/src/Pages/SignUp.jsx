import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SignUp() {
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
    navigate("/login");
  };
  return (
    <div className="flex h-screen items-center justify-center bg-slate-400">
      <div className="flex flex-col md:flex-row w-full max-w-4xl rounded-r-lg shadow-lg bg-white ">
        <div className=" md:block md:w-1/2 bg-gray-800 rounded-r-lg p-6">
            <img src="../../login.png" alt="This may not uploaded correctly" />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Create Account
          </h2>
          <div className="flex justify-between gap-4 mb-6">
            <button className="flex items-center justify-center w-full py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100">
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="Google"
                className="h-5 mr-2"
              />
              Sign up with Google
            </button>
            <button className="flex items-center justify-center w-full py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100">
              <img
                src="https://img.icons8.com/color/48/000000/facebook.png"
                alt="Facebook"
                className="h-5 mr-2"
              />
              Sign up with Facebook
            </button>
          </div>
          <div className="text-center text-gray-500 mb-6">- OR -</div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-4 mb-4">
    <div className="w-1/2">
      <input
        type="text"
        placeholder="First Name"
        {...register("firstName", { required: "First Name is required" })}
        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
          errors.firstName ? "border-red-500" : ""
        }`}
      />
      {errors.firstName && (
        <p className="text-red-500 text-sm mt-1">
          {errors.firstName.message}
        </p>
      )}
    </div>
    
    <div className="w-1/2">
      <input
        type="text"
        placeholder="Last Name"
        {...register("lastName", { required: "Last Name is required" })}
        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
          errors.lastName ? "border-red-500" : ""
        }`}
      />
      {errors.lastName && (
        <p className="text-red-500 text-sm mt-1">
          {errors.lastName.message}
        </p>
      )}
    </div>
  </div>


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
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 text-white bg-gray-800 rounded-md hover:bg-gray-950"
            >
              Create Account
            </button>
          </form>
          <p className="text-center text-gray-500 mt-6">
            Already have an account?
            <a
              href=""
              onClick={handleClick}
              className="text-blue-500 hover:underline ml-2"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
