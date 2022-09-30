import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { userSignUpRequest } from "../redux/auth/auth.actions";
import notification from "../components/notification/Notification";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    mobile_code: "",
    mobile: "",
    country_code: "",
    country: "",
    password: "",
    password_confirmation: "",
    agree: "",
  });

  const handleData = (key, value) => {
    setData({ ...data, [key]: value });
  };

  const handleLoading = () => {
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password !== data.password_confirmation) {
      notification.showErrorAlert("Password not Matched");
    } else {
      setLoading(true);
      dispatch(userSignUpRequest(data, handleLoading));
    }
  };
  return (
    <section className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 md:mt-12 md:mb-12">
      <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-900 border-gray-800">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
            Create new account
          </h1>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="space-y-4 md:space-y-6"
          >
            <div>
              <label
                for="username"
                className="block mb-2 text-sm font-medium  text-white"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="someone"
                onChange={(e) => handleData("username", e.target.value)}
                required
              />
            </div>
            <div>
              <label
                for="firstname"
                className="block mb-2 text-sm font-medium  text-white"
              >
                First name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="someone"
                onChange={(e) => handleData("firstname", e.target.value)}
                required
              />
            </div>
            <div>
              <label
                for="lastname"
                className="block mb-2 text-sm font-medium  text-white"
              >
                Last name
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="someone"
                onChange={(e) => handleData("lastname", e.target.value)}
                required
              />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium  text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="name@company.com"
                onChange={(e) => handleData("email", e.target.value)}
                required
              />
            </div>
            <div className="flex flex-row space-x-4">
              <div className="w-1/3">
                <label
                  for="countries"
                  class="block mb-2 text-sm font-medium  text-white"
                >
                  Mobile code
                </label>
                <input
                  type="tel"
                  name="mobilecode"
                  id="mobilecode"
                  className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="123"
                  onChange={(e) => handleData("mobile_code", e.target.value)}
                  required
                />
              </div>
              <div className="w-2/3">
                <label
                  for="phonenumber"
                  className="block mb-2 text-sm font-medium  text-white"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phonenumber"
                  id="phonenumber"
                  className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="123456789"
                  onChange={(e) => handleData("mobile", e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <div className="w-1/3">
                <label
                  for="countries"
                  class="block mb-2 text-sm font-medium  text-white"
                >
                  Country code
                </label>
                <input
                  type="text"
                  name="countrycode"
                  id="countrycode"
                  className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="ID"
                  onChange={(e) => handleData("country_code", e.target.value)}
                  required
                />
              </div>
              <div className="w-2/3">
                <label
                  for="country"
                  className="block mb-2 text-sm font-medium  text-white"
                >
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Indonesia"
                  onChange={(e) => handleData("country", e.target.value)}
                  required
                />
              </div>
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
                placeholder="••••••••"
                className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => handleData("password", e.target.value)}
                required
              />
            </div>
            <div>
              <label
                for="confirmpassword"
                className="block mb-2 text-sm font-medium  text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                placeholder="••••••••"
                className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) =>
                  handleData("password_confirmation", e.target.value)
                }
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="iagree"
                  aria-describedby="iagree"
                  type="checkbox"
                  value="yes"
                  className="w-4 h-4 border  rounded  focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800"
                  onChange={(e) => handleData("agree", e.target.value)}
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label for="iagree" className=" text-gray-300">
                  I agree with terms of services
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
            >
              SignUp
            </button>
            <p className="text-sm font-light  text-gray-400">
              Already have an account?{" "}
              <Link href="/login">
                <a
                  href=""
                  className="font-medium text-blue-600 hover:underline text-primary-500"
                >
                  Login
                </a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
