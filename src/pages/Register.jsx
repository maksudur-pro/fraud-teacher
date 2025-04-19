import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          title: "Account created successfully.",
          showClass: {
            popup: `
                      animate__animated
                      animate__fadeInUp
                      animate__faster
                    `,
          },
          hideClass: {
            popup: `
                      animate__animated
                      animate__fadeOutDown
                      animate__faster
                    `,
          },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    reset();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen bg-white">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h3 className="text-4xl font-bold text-[#f1961f] text-center">
          Register
        </h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 undefined">
              Name
            </label>

            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              placeholder="name"
              className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-[#f1961f] focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.name && (
              <span className="text-error">Name is required</span>
            )}
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 undefined">
              Email
            </label>

            <input
              type="email"
              placeholder="email"
              name="email"
              {...register("email", { required: true })}
              className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-[#f1961f] focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.email && (
              <span className="text-error">Email is required</span>
            )}
          </div>

          <div className="mt-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 undefined">
              Password
            </label>

            <input
              type="password"
              placeholder="password"
              name="password"
              {...register("password", { required: true, minLength: 6 })}
              className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-[#f1961f] focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.password?.type === "required" && (
              <span className="text-error">Password is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-error">
                Password must be at least 6 characters
              </span>
            )}
          </div>

          <div className="flex items-center mt-4">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#f1961f] rounded-md hover:bg-[#f1961f] focus:outline-none focus:bg-[#f1961f]">
              Register
            </button>
          </div>
        </form>
        <div className="mt-4 text-grey-600 text-center">
          Already have an account?{" "}
          <span>
            <Link
              to="/login"
              className="text-[#f1961f] hover:underline"
              href="#">
              Log in
            </Link>
          </span>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full" />
          <p className="px-3 ">OR</p>
          <hr className="w-full" />
        </div>
        <div className="my-6 space-y-2">
          <button
            type="button"
            className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current text-[#f1961f]">
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Register with Google</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
