/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import {
  logOutRequest,
  languageChangeRequest,
} from "../../redux/auth/auth.actions";

function Navbar() {
  const languageData = useSelector(({ auth }) => auth.languageData);
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleLoading = () => {
    setLoading(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <div>
      <nav className=" px-2 sm:px-4 py-2.5 bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-800 md:hidden">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="" className="flex items-center">
            <span className="self-center font-bold text-3xl whitespace-nowrap text-yellow-500">
              H99
            </span>
          </a>
          <div className="flex md:order-2">
            <div className="mt-2">
              {isLoggedIn ? (
                <>
                  <button
                    type="button"
                    class="text-black bg-white hover:bg-white focus:outline-none focus:ring-4 focus:ring-white font-medium rounded-full text-sm px-2 py-1 text-center mr-2 mb-2 "
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
                      class="text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-2 py-1 text-center mr-2 mb-2"
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
                      class="text-black bg-white hover:bg-white focus:outline-none focus:ring-4 focus:ring-white font-medium rounded-full text-sm px-2 py-1 text-center mr-2 mb-2 "
                    >
                      Login
                    </button>
                  </Link>
                  <Link href="/signup" passHref>
                    <button
                      type="button"
                      class="text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300  rounded-full text-sm px-2 py-1 text-center mr-2 mb-2 "
                    >
                      SignUp
                    </button>
                  </Link>
                </>
              )}
            </div>

            <IconButton
              color="secondary"
              sx={{ ml: 1 }}
              onClick={(e) => {
                handleShow();
              }}
            >
              <img
                src="data:image/png;base64,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"
                width="24"
                height="24"
                alt=""
              />
            </IconButton>

            {!show ? (
              <></>
            ) : (
              <>
                {" "}
                <div
                  id="dropdownDefault"
                  data-dropdown-toggle="dropdown"
                  class="z-10 w-30 rounded divide-y divide-gray-100 shadow
         bg-gray-700 language-switch"
                  data-popper-reference-hidden=""
                  data-popper-escaped=""
                  data-popper-placement="bottom"
                >
                  <ul
                    class="py-1 text-sm  text-gray-200"
                    aria-labelledby="dropdownDefault"
                  >
                    <li>
                      <a
                        class="block py-2 px-4 hover:bg-gray-600 hover:text-white"
                        onClick={() => {
                          setShow(false);
                          const payload = {
                            language: "en",
                          };
                          dispatch(languageChangeRequest(payload));
                        }}
                      >
                        English
                      </a>
                    </li>
                    <li>
                      <a
                        class="block py-2 px-4  hover:bg-gray-600 hover:text-white"
                        onClick={() => {
                          setShow(false);
                          const payload = {
                            language: "hn",
                          };
                          dispatch(languageChangeRequest(payload));
                        }}
                      >
                        Hindi
                      </a>
                    </li>
                    <li>
                      <a
                        class="block py-2 px-4 hover:bg-gray-600 hover:text-white"
                        onClick={() => {
                          setShow(false);
                          const payload = {
                            language: "jp",
                          };
                          dispatch(languageChangeRequest(payload));
                        }}
                      >
                        Japanesse
                      </a>
                    </li>
                    <li>
                      <a
                        class="block py-2 px-4 hover:bg-gray-600 hover:text-white"
                        onClick={() => {
                          setShow(false);
                          const payload = {
                            language: "ch",
                          };
                          dispatch(languageChangeRequest(payload));
                        }}
                      >
                        Chinese
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            )}

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2   hover:bg-gray-700 focus:ring-gray-600"
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

          <aside className="w-64" aria-label="Sidebar">
            <div
              className="hidden overflow-y-auto absolute py-4 px-5 rounded bg-gray-800"
              id="navbar-sticky"
            >
              <h1 className="text-center text-xl font-semibold whitespace-nowrap text-white">
                H99
              </h1>
              <div className="flex space-x-4 mb-2 p-4 bg-gray-700 rounded-3xl">
                <div className="flex flex-col items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-shield-fill-check"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
                    />
                  </svg>
                  <h1>Security</h1>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-bell-fill"
                    viewBox="0 0 16 16"
                    className="text-center"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                  </svg>
                  <h1>Notifications</h1>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-clock-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  </svg>
                  <h1>History</h1>
                </div>
              </div>
              <ul className="space-y-2 bg-gray-700 rounded-2xl">
                <Link href="/" passHref>
                  <li>
                    <a className="flex items-center p-2 text-base font-normal rounded-lg text-white  hover:bg-gray-500 cursor-pointer">
                      <svg
                        aria-hidden="true"
                        className="w-6 h-6 transition duration-75   group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                      </svg>
                      <span className="ml-3">Home</span>
                    </a>
                  </li>
                </Link>
                <Link href="/buy-ticket" passHref>
                  <li>
                    <a className="flex items-center p-2 text-base font-normal rounded-lg text-white  hover:bg-gray-500 cursor-pointer">
                      <svg
                        aria-hidden="true"
                        className="flex-shrink-0 w-6 h-6  transition duration-75  group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                      </svg>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Buy Ticket
                      </span>
                    </a>
                  </li>
                </Link>
                <Link href="/about-us">
                  <li>
                    <a className="flex items-center p-2 text-base font-normal  rounded-lg text-white  hover:bg-gray-500 cursor-pointer">
                      <svg
                        aria-hidden="true"
                        className="flex-shrink-0 w-6 h-6  transition duration-75  group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                        <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                      </svg>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        About Us
                      </span>
                    </a>
                  </li>
                </Link>
                <Link href="/contact-us">
                  <li>
                    <a className="flex items-center p-2 text-base font-normal  rounded-lg text-white  hover:bg-gray-500 cursor-pointer">
                      <svg
                        aria-hidden="true"
                        className="flex-shrink-0 w-6 h-6  transition duration-75  group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Contact US
                      </span>
                    </a>
                  </li>
                </Link>
                <Link href="/report" passHref>
                  <li>
                    <a className="flex items-center p-2 text-base font-normal  rounded-lg text-white  hover:bg-gray-500 cursor-pointer">
                      <svg
                        aria-hidden="true"
                        className="flex-shrink-0 w-6 h-6  transition duration-75  group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Report
                      </span>
                    </a>
                  </li>
                </Link>
                {isLoggedIn ? (
                  <>
                    <Link href="/dashboard/deposit" passHref>
                      <li>
                        <a className="flex items-center p-2 text-base font-normal  rounded-lg text-white  hover:bg-gray-500 cursor-pointer">
                          <svg
                            aria-hidden="true"
                            className="flex-shrink-0 w-6 h-6  transition duration-75  group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span className="flex-1 ml-3 whitespace-nowrap">
                            Dashboard
                          </span>
                        </a>
                      </li>
                    </Link>

                    <li>
                      <a
                        className="flex items-center p-2 text-base font-normal  rounded-lg text-white  hover:bg-gray-500 cursor-pointer"
                        onClick={() => {
                          setLoading(true);
                          dispatch(logOutRequest(handleLoading));
                        }}
                      >
                        <svg
                          aria-hidden="true"
                          className="flex-shrink-0 w-6 h-6  transition duration-75  group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          Logout
                        </span>
                      </a>
                    </li>
                  </>
                ) : (
                  <>
                    <Link href="/login" passHref>
                      <li>
                        <a className="flex items-center p-2 text-base font-normal  rounded-lg text-white  hover:bg-gray-500 cursor-pointer">
                          <svg
                            aria-hidden="true"
                            className="flex-shrink-0 w-6 h-6  transition duration-75  group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span className="flex-1 ml-3 whitespace-nowrap">
                            Sign In
                          </span>
                        </a>
                      </li>
                    </Link>
                    <Link href="/signup">
                      <li>
                        <a className="flex items-center p-2 text-base font-normal  rounded-lg text-white  hover:bg-gray-500 cursor-pointer">
                          <svg
                            aria-hidden="true"
                            className="flex-shrink-0 w-6 h-6  transition duration-75  group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span className="flex-1 ml-3 whitespace-nowrap">
                            Sign Up
                          </span>
                        </a>
                      </li>
                    </Link>
                  </>
                )}
              </ul>
            </div>
          </aside>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
