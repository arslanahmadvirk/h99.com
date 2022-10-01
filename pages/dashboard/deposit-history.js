import React from "react";
import { useState, useEffect } from "react";
import Admin from "../../layouts/Admin.js";
import { useDispatch, useSelector } from "react-redux";
import { depositHistoryRequest } from "../../redux/auth/auth.actions.js";

export default function DepositHistory() {
  const depositHistory = useSelector(({ auth }) => auth.depositHistory);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(depositHistoryRequest());
  }, []);

  useEffect(() => {
    if (depositHistory) {
      setData(depositHistory);
    }
  }, [depositHistory]);

  return (
    <Admin>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-12 mb-12 md:mt-12 md:mb-0">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs uppercase  bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Transaction ID
              </th>
              <th scope="col" class="py-3 px-6">
                Gateway
              </th>
              <th scope="col" class="py-3 px-6">
                Amount
              </th>
              <th scope="col" class="py-3 px-6">
                Description
              </th>
              <th scope="col" class="py-3 px-6">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, key) => (
              <>
                <tr class=" border-b bg-gray-900 border-gray-800">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium  whitespace-nowrap text-white"
                  >
                    {d.trx}
                  </th>
                  <td class="py-4 px-6">{d.gateway.name}</td>
                  <td class="py-4 px-6">{d.amount}</td>
                  <td class="py-4 px-6">{d.gateway.description}</td>
                  <td class="py-4 px-6">{d.created_at.split("T")[0]} </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </Admin>
  );
}
