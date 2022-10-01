import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ActiveLink from "../helpers/ActiveLink";

const NavWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: 48,
  marginTop: 24,
  textAlign: "center",
  "& > a": {
    color: theme.palette.primary.light,
    fontFamily: "Montserrat",
    display: "inline-flex",
    alignItems: "center",
    minHeight: 40,
    margin: "0 17px",
    fontSize: 16,
    lineHeight: "40px",
    fontWeight: 500,
    whiteSpace: "nowrap",
    borderBottom: "1px solid transparent",
    textDecoration: "none",
    "&.active": {
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      "& .icon": {
        opacity: 1,
      },
    },
    "& .icon": {
      opacity: 0.6,
      fontSize: 18,
    },
  },
}));

function Navs() {
  const languageData = useSelector(({ auth }) => auth.languageData);
  const [data, setData] = useState({});
  const [english, setEnglish] = useState({
    Home: "Home",
    Contact: "Contact Us",
  });

  useEffect(() => {
    if (languageData) {
      if (Object.keys(languageData).length > 1) {
        setData(languageData);
      } else {
        setData(english);
      }
    }
  }, [languageData]);

  const navItems = [
    {
      id: 1,
      name: data.Home,
      icon: "",
      url: "/",
    },
    {
      id: 2,
      name: "Buy Ticket",
      icon: "",
      url: "/buy-ticket",
    },
    {
      id: 3,
      name: "About Us",
      icon: "",
      url: "/about-us",
    },
    {
      id: 4,
      name: data.Contact,
      icon: "",
      url: "/contact-us",
    },
    {
      id: 5,
      name: "Report",
      icon: "",
      url: "/report",
    },
  ];

  return (
    <NavWrapper component="nav" sx={{ display: { xs: "block", sm: "block" } }}>
      {navItems.map((item) => (
        <ActiveLink key={item.id} activeClassName="active" href={item.url}>
          <a className="nav-link">
            <span className="icon iconfont" style={{ marginRight: 5 }}>
              {item.icon}
            </span>
            <Typography component="p" variant="body1" fontWeight="500">
              {item.name}
            </Typography>
          </a>
        </ActiveLink>
      ))}
    </NavWrapper>
  );
}

export default Navs;
