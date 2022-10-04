import React from "react";
import { useState, useEffect } from "react";
import Admin from "../../layouts/Admin";
import { depositRequest } from "../../redux/auth/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function FinalDeposit() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const DepositAmount = router.query.DepositAmount;
  const dispatch = useDispatch();
  const [data, setData] = useState({
    amount: DepositAmount,
    currency: "USDT",
    method_code: 1000,
  });

  const handleLoading = () => {
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(depositRequest(data, handleLoading));
  };

  return (
    <Admin>
      <section className="flex flex-col items-center justify-center mx-auto lg:py-0 mt-12 mb-12 md:mt-12 md:mb-12">
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md p-5 text-center bg-gray-900 border-gray-800 space-y-5 text-white">
          <h1 className="text-center text-3xl font-bold text-white">Deposit Confirm</h1>
          <h1>
            You have requested{" "}
            <span className="text-green-500 font-bold">
              {" "}
              {DepositAmount} USD{" "}
            </span>
            , Please pay{" "}
            <span className="text-green-500 font-bold">
              {" "}
              {DepositAmount} USD{" "}
            </span>{" "}
            for successful payment
          </h1>
          <h1 className="text-yellow-500 font-bold">
            Please follow the instruction below
          </h1>
          <h1>
            Please Do Transfer TO :{" "}
            <span className="text-blue-600"> xdafasdfasdfasdfadsf </span>
          </h1>
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 mb-2"
            onClick={(e) => handleSubmit(e)}
          >
            Pay Now
          </button>
        </div>
      </section>
    </Admin>
  );
}
