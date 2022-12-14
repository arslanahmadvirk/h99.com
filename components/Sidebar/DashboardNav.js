/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Link from "next/link";

function DashboardNav() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div>
      <nav className="border-gray-800 px-2 sm:px-4 py-2.5 rounded bg-gray-900 md:hidden marginTop">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={(e) => handleShow()}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          {show ? (
            <>
              {" "}
              <div className=" w-full md:block md:w-auto">
                <ul className="flex flex-col p-4 mt-4 rounded-lg border bg-gray-900 border-gray-800">
                  <Link href="/dashboard/deposit" passHref>
                    <li>
                      <a
                        className="block py-2 pr-4 pl-3 rounded md:bg-transparent text-gray-500 md:p-0 hover:bg-white cursor-pointer"
                        aria-current="page"
                      >
                        Deposit
                      </a>
                    </li>
                  </Link>
                  <Link href="/dashboard/deposit-history" passHref>
                    <li>
                      <a
                        className="block py-2 pr-4 pl-3 rounded md:bg-transparent text-gray-500 md:p-0 hover:bg-white cursor-pointer"
                        aria-current="page"
                      >
                        Deposit History
                      </a>
                    </li>
                  </Link>
                  <Link href="/dashboard/withdraw" passHref>
                    <li>
                      <a
                        className="block py-2 pr-4 pl-3 rounded md:bg-transparent text-gray-500 md:p-0 hover:bg-white cursor-pointer "
                        aria-current="page"
                      >
                        Withdraw
                      </a>
                    </li>
                  </Link>
                  <Link href="/dashboard/profile" passHref>
                    <li>
                      <a
                        className="block py-2 pr-4 pl-3 rounded md:bg-transparent text-gray-500 md:p-0 hover:bg-white cursor-pointer "
                        aria-current="page"
                      >
                        Profile Update
                      </a>
                    </li>
                  </Link>
                  <Link href="/dashboard/change-password" passHref>
                    <li>
                      <a
                        className="block py-2 pr-4 pl-3 rounded md:bg-transparent text-gray-500 md:p-0 hover:bg-white cursor-pointer "
                        aria-current="page"
                      >
                        Change Password
                      </a>
                    </li>
                  </Link>
                </ul>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </nav>
    </div>
  );
}

export default DashboardNav;
