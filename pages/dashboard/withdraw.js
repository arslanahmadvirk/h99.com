import React from "react";
import { useState, useEffect } from "react";
import Admin from "../../layouts/Admin.js";
import { useDispatch, useSelector } from "react-redux";
import { withdrawRequest } from "../../redux/auth/auth.actions.js";

export default function Withdraw() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    amount: "",
    method_code: 1,
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
    dispatch(withdrawRequest(data, handleLoading));
  };
  return (
    <Admin>
      <section className="flex flex-col items-center justify-center mx-auto lg:py-0 mt-12 mb-12 md:mt-12 md:mb-12">
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="space-y-4 md:space-y-6"
            >
              <div className="flex flex-row space-x-2">
                <div className="w-2/3">
                  <label
                    for="countries"
                    class="block mb-2 text-sm font-medium  text-white"
                  >
                    Select Coin
                  </label>
                  <select
                    id="countries"
                    class=" border   text-sm rounded-lg   block p-2.5 w-full bg-gray-700 border-gray-800 placeholder-gray-400 text-white"
                  >
                    <option selected="1">USDT</option>
                  </select>
                </div>
                <div className="w-1/3">
                  <label
                    for="countries"
                    class="block mb-2 text-sm font-medium  text-white"
                  >
                    Agreement
                  </label>
                  <select
                    id="countries"
                    class=" border   text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  "
                  >
                    <option selected="TRC-20">TRC-20</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  for="text"
                  className="block mb-2 text-sm font-medium  text-white"
                >
                  Withdrawal amount
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  "
                  placeholder="Enter amount"
                  onChange={(e) => handleData("amount", e.target.value)}
                  required
                />
              </div>

              <div>
                <p className="text-sm text-white">
                  ??????The minimum withdraw is$10, make sure the info. is the same
                  as above
                </p>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
              >
                Withdraw
              </button>
              <div className="text-sm text-white">
                Estimated Transaction Fee:$1USDT
              </div>
            </form>
          </div>
        </div>
      </section>
    </Admin>
  );
}
