import Link from "next/link";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

function Logo() {
  return (
    <div className="w-full text-center">
      <Link href="#">
        <a>
          {/* <img src="https://hx1web.f384883be.com/static/media/J9logo.71989e85.svg" alt="h99 logo" /> */}
          <h4 className="text-4xl text-yellow-300 font-bold">H99.com</h4>
        </a>
      </Link>
    </div>
  );
}

export default Logo;
