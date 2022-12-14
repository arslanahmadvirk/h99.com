import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { loginRequest } from "../redux/auth/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleData = (key, value) => {
    setData({ ...data, [key]: value });
  };

  const handleLoading = () => {
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(loginRequest(data, handleLoading));
  };

  return (
    <section className="flex flex-col items-center justify-center mt-10 md:mt-0 px-6 py-8 mx-auto md:h-screen lg:py-0 ">
      <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-900 border-gray-800">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
            Sign in to your account
          </h1>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="space-y-4 md:space-y-6"
          >
            <div>
              <label
                for="text"
                className="block mb-2 text-sm font-medium  text-white"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="someone"
                onChange={(e) => handleData("username", e.target.value)}
                required
              />
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium  text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="????????????????????????"
                className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => handleData("password", e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border rounded focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label for="remember" className=" text-gray-300">
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline text-primary-500"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
            >
              Sign in
            </button>

            <p className="text-sm font-light text-gray-400">
              Don???t have an account yet?
              <Link href="/signup">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline text-primary-500 ml-1"
                >
                  Sign up
                </a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
