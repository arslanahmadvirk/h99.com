import React from "react";
import { useState, useEffect } from "react";
import Admin from "../../layouts/Admin";
import { depositRequest } from "../../redux/auth/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function DepositPreview() {
  const router = useRouter();
  const DepositAmount = router.query.DepositAmount;

  const handleRoute = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/dashboard/FinalDeposit",
      query: { DepositAmount: DepositAmount },
    });
  };

  return (
    <Admin>
      <div className="bg-gray-800">
        <div className="flex flex-col items-center justify-center mx-auto lg:py-0 md:mt-12 md:mb-12 md:flex-row bg-gray-800">
          <div className="w-[250px] h-[250px]">
            <img src="/USDT.png" alt="USDT" />
          </div>
          <div className="space-y-4 text-white">
            <h1>
              Amount:{" "}
              <span className="text-green-500 font-bold">
                {DepositAmount} USD
              </span>
            </h1>
            <h1>Charges: 0 USD</h1>
            <h1>
              Payable:{" "}
              <span className="text-green-500 font-bold">
                {DepositAmount} USD
              </span>
            </h1>
            <h1>Conversion Rate: 1 USD = 1.00 USDT</h1>
            <h1 className="text-green-500 font-bold">
              In USDT: {DepositAmount} USDT
            </h1>
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 mb-2"
          onClick={(e) => handleRoute(e)}
        >
          Pay Now
        </button>
      </div>
    </Admin>
  );
}
