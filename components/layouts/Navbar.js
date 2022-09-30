/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { logOutRequest } from "../../redux/auth/auth.actions";

function Navbar() {
  const languageData = useSelector(({ auth }) => auth.languageData);
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleLoading = () => {
    setLoading(false);
  };

  return (
    <div>
      <nav className="bg-gray-900 px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-800 md:hidden">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="" className="flex items-center">
            <span className="self-center font-bold text-3xl whitespace-nowrap text-yellow-500">
              H99.com
            </span>
          </a>
          <div className="flex md:order-2">
            {isLoggedIn ? (
              <>
                <button
                  type="button"
                  class="text-black bg-white hover:bg-white focus:outline-none focus:ring-4 focus:ring-white font-medium rounded-full text-sm px-4 py-2 text-center mr-2 mb-2 dark:focus:ring-white"
                  onClick={() => {
                    setLoading(true);
                    dispatch(logOutRequest(handleLoading));
                  }}
                >
                  Logout
                </button>

                <Link href="/dashboard/deposit" passHref>
                  <button
                    type="button"
                    class="text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-4 py-2 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
                  >
                    Dashboard
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/login" passHref>
                  <button
                    type="button"
                    class="text-black bg-white hover:bg-white focus:outline-none focus:ring-4 focus:ring-white font-medium rounded-full text-sm px-4 py-2 text-center mr-2 mb-2 dark:focus:ring-white"
                  >
                    Login
                  </button>
                </Link>
                <Link href="/signup" passHref>
                  <button
                    type="button"
                    class="text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-4 py-2 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
                  >
                    SignUp
                  </button>
                </Link>
              </>
            )}

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
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
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 bg-gray-900 rounded-lg border border-gray-800">
              <Link href="/" passHref>
                <li>
                  <a
                    className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
              </Link>
              <Link href="/buy-ticket" passHref>
                <li>
                  <a className="block py-2 pr-4 pl-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Buy Ticket
                  </a>
                </li>
              </Link>
              <Link href="/about-us" passHref>
                <li>
                  <a className="block py-2 pr-4 pl-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    About Us
                  </a>
                </li>
              </Link>
              <Link href="/contact-us" passHref>
                <li>
                  <a className="block py-2 pr-4 pl-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Contact US
                  </a>
                </li>
              </Link>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Report
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
