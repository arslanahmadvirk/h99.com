import Head from "next/head";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import BgStars from "../helpers/BgStars";
import SupportButton from "../base/SupportButton";
import Navbar from "./Navbar";

const LayoutWrapper = styled(Box)(() => ({
  position: "relative",
  width: "100%",
}));

function Layout({ children }) {
  return (
    <div>
      <BgStars />
      <Head>
        <title>
          H99.COM &mdash; The First Cryptocurrency Casino Based on Web3.0
        </title>
      </Head>
      <Header />
      <Navbar />
      <Box component="main">{children}</Box>
      <Footer />
      <SupportButton />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
