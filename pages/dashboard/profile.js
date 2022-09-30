import React from "react";
import Admin from "../../layouts/Admin.js";
import { profileUpdate } from "../../redux/auth/auth.actions.js";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function Profile() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    state: "",
    city: "",
    zip: "",
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
    dispatch(profileUpdate(data, handleLoading));
  };

  return (
    <Admin>
      <section className="flex flex-col items-center justify-center mx-auto lg:py-0 md:mt-12 md:mb-12">
        <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
              Profile Update
            </h1>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="space-y-4 md:space-y-6"
            >
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
                  for="lastname"
                  className="block mb-2 text-sm font-medium  text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="address"
                  onChange={(e) => handleData("address", e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  for="lastname"
                  className="block mb-2 text-sm font-medium  text-white"
                >
                  State
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="state"
                  onChange={(e) => handleData("state", e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-row space-x-4">
                <div className="w-1/3">
                  <label
                    for="countries"
                    class="block mb-2 text-sm font-medium  text-white"
                  >
                    Zip Code
                  </label>
                  <input
                    type="text"
                    name="countrycode"
                    id="countrycode"
                    className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="12345"
                    onChange={(e) => handleData("zip", e.target.value)}
                    required
                  />
                </div>
                <div className="w-2/3">
                  <label
                    for="country"
                    className="block mb-2 text-sm font-medium  text-white"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="city"
                    onChange={(e) => handleData("city", e.target.value)}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </section>
    </Admin>
  );
}
