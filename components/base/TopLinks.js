import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { useState } from "react";

function TopLinks() {
  const [loggedin, setLoggedin] = useState(false);
  return (
    <div className="flex mx-auto w-4/5 py-3">
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <img
          src="https://hx1web.f384883be.com/static/media/Download.e849cb9b.svg"
          width="24"
          height="32"
          alt="download icon"
        />
      </IconButton>
      {loggedin ? (
        <>
          {" "}
          <Link href="/login" passHref>
            <button
              type="button"
              class="text-black bg-white hover:bg-white focus:outline-none focus:ring-4 focus:ring-white font-medium rounded-full text-sm px-7 py-2 text-center mr-2 mb-2 dark:focus:ring-white"
            >
              Logout
            </button>
          </Link>
          <Link href="/dashboard/deposit" passHref>
            <button
              type="button"
              class="text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-7 py-2 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
            >
              Dashboard
            </button>
          </Link>
        </>
      ) : (
        <>
          {" "}
          <Link href="/login" passHref>
            <button
              type="button"
              class="text-black bg-white hover:bg-white focus:outline-none focus:ring-4 focus:ring-white font-medium rounded-full text-sm px-7 py-2 text-center mr-2 mb-2 dark:focus:ring-white"
            >
              Login
            </button>
          </Link>
          <Link href="/signup" passHref>
            <button
              type="button"
              class="text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-7 py-2 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
            >
              SignUp
            </button>
          </Link>
        </>
      )}

      <IconButton color="secondary" sx={{ ml: 1 }}>
        <img
          src="data:image/png;base64,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"
          width="24"
          height="24"
          alt=""
        />
      </IconButton>
    </div>
  );
}

export default TopLinks;
