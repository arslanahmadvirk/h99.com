import React from "react";
import { useState, useEffect } from "react";
import Admin from "../../layouts/Admin";
import { useRouter } from "next/router";

export default function Deposit() {
  const router = useRouter();
  const [data, setData] = useState({
    amount: "",
  });

  const handleData = (key, value) => {
    setData({ ...data, [key]: value });
  };

  const handleRoute = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/dashboard/deposit-preview",
      query: { DepositAmount: data.amount },
    });
  };

  return (
    <Admin>
      <section className="flex flex-col items-center justify-center mx-auto lg:py-0 md:mt-12 md:mb-12">
        <div className="flex flex-col md:flex-row justify-center items-center w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-900 border-gray-800">
          <div className="h-[250px] w-[250px]">
            <img src="/USDT.png" alt="USDT" />
          </div>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              onSubmit={(e) => handleRoute(e)}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <label
                  for="countries"
                  class="block mb-2 text-sm font-medium  text-white"
                >
                  Select Coin
                </label>
                <select
                  id="countries"
                  class=" border   text-sm rounded-lg   block p-2.5 w-full bg-gray-700 border-gray-600 placeholder-gray-400 text-white  "
                >
                  <option selected="USDT">USDT</option>
                </select>
              </div>

              <div>
                <label
                  for="text"
                  className="block mb-2 text-sm font-medium  text-white"
                >
                  Enter Amound in USD
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  "
                  placeholder="Enter Amount"
                  onChange={(e) => handleData("amount", e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
              >
                Deposit
              </button>
            </form>
          </div>
        </div>
      </section>
    </Admin>
  );
}
