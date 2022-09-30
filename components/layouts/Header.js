import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Logo from "../base/Logo";
import Navs from "../base/Navs";
import SupportedBy from "../base/SupportedBy";
import TopLinks from "../base/TopLinks";

const HeaderWrapper = styled(Box)(() => ({
  position: "sticky",
  top: "0",
  left: "0",
  zIndex: 100,
  width: "100%",
  transition: "background-color 0.8s ease-in-out",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  "&::after": {
    content: "''",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backdropFilter: "blur(0)",
    opacity: 0,
    transition: "all 0.2s ease-in",
  },
  "&.shrink": {
    "&::after": {
      backdropFilter: "blur(12px)",
      opacity: 1,
    },
  },
}));

const maxHeight = 24;

function Header() {
  const [isShrink, setIsShrink] = useState(false);

  useEffect(() => {
    const handler = () => {
      setIsShrink((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > maxHeight ||
            document.documentElement.scrollTop > maxHeight)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < maxHeight &&
          document.documentElement.scrollTop < maxHeight
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [isShrink]);

  return (
    <div className="hidden md:flex">
      <HeaderWrapper component="header" className={isShrink && "shrink"}>
        <div className="md:flex md:w-full space-x-12 md:justify-between mx-auto">
          <SupportedBy />
          <h1 className="text-4xl py-3 font-bold text-yellow-600 text-center">
            H99.com
          </h1>
          <TopLinks />
        </div>
        <Navs />
      </HeaderWrapper>
    </div>
  );
}

export default Header;
