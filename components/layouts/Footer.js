import Link from "next/link";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import BusinessWidget from "../widgets/Business";
import LicenseWidget from "../widgets/License";
import PartnerWidget from "../widgets/Partner";

const FooterComponentWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  background: "#262629",
  width: "100%",
  "& .footer__content": {
    display: "block",
    "& .footer__info": {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "130px",
      padding: "32px 0 24px",
    },
  },
  "& .footer__bottom": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 8,
  },
  "& .footer__additional": {
    display: "flex",
    alignItems: "center",
  },
  "& .footer__navs": {
    display: "flex",
    alignItems: "center",
    height: 18,
    borderRight: "1px solid rgba(255, 255, 255, 0.8)",
    "& > a": {
      fontSize: 12,
      lineHeight: "1.5",
      textAlign: "left",
      marginRight: 24,
      color: "rgba(255, 255, 255, 0.8)",
      textDecoration: "none",
      "&:hover": {
        color: theme.palette.primary.main,
        textDecoration: "underline",
      },
    },
  },
  "& .language__switcher": {
    position: "relative",
    marginLeft: 24,
    "& button": {
      display: "flex",
      alignItems: "center",
      justifyContent: "end",
      width: "auto",
      height: 48,
      padding: 0,
      borderRadius: 8,
      backgroundColor: "transparent !important",
      "& span": {
        marginRight: 4,
        fontSize: 16,
        color: "#888888",
      },
      "& p": {
        color: "#888888",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: "22px",
        letterSpacing: 0,
        textAlign: "left",
      },
    },
  },
}));

function FooterComponent() {
  return (
    <FooterComponentWrapper component="footer">
      <Container maxWidth="xl">
        <div className="footer__content">
          <div className="footer__info">
            <div className="global-partner">
              <Typography
                component="h6"
                variant="body2"
                lineHeight="22px"
                gutterBottom
                sx={{ color: "rgba(255, 255, 255, 0.6)" }}
              >
                PARTNERS
              </Typography>
              <PartnerWidget />
            </div>
            <div className="licences">
              <Typography
                component="h6"
                variant="body2"
                lineHeight="22px"
                gutterBottom
                sx={{ color: "rgba(255, 255, 255, 0.6)" }}
              >
                LICENSES
              </Typography>
              <LicenseWidget />
            </div>
            <div className="pics-list">
              <Typography
                component="h6"
                variant="body2"
                lineHeight="22px"
                gutterBottom
                sx={{ color: "rgba(255, 255, 255, 0.6)" }}
              >
                BUSINESS SUPPORT
              </Typography>
            </div>
          </div>
          <Divider sx={{ my: 2, borderColor: "rgba(255 ,255, 255, 0.08)" }} />
          <Typography
            component="p"
            variant="caption"
            lineHeight="1.5"
            gutterBottom
            sx={{ color: "rgba(255, 255, 255, 0.6)" }}
          >
            This website is operated by Westward Way Tech N.V. (registration No.
            158203), with address at Abraham de Veerstraat 9, Curacao. This
            website is operated under licence number: 365/JAZ issued by Gaming
            Service Provider, Authorised and Regulated by the Government of
            Curacao. Apollo MKT Limited, Reg No. HE 418946, having its
            registered office at Strovolou 47, Kyros Tower, 5th floor, Strovolos
            2018, Nicosia, Cyprus, which provides management, payment and
            support services related to the operation of the website.
          </Typography>
          <div className="footer__bottom">
            <Typography
              component="p"
              fontSize="10px"
              lineHeight="1.5"
              sx={{ color: "rgba(255, 255, 255, 0.8)" }}
            >
              COPYRIGHT © 2021 J9 Group All Rights Reserved.Gambling can be
              addictive. Play responsibly.
            </Typography>
            <div className="footer__additional">
              <div className="footer__navs">
                <Link href="/">
                  <a>General terms</a>
                </Link>
                <Link href="/">
                  <a>About Us</a>
                </Link>
                <Link href="/">
                  <a>Contact us</a>
                </Link>
                <Link href="/">
                  <a>Download APP</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </FooterComponentWrapper>
  );
}

export default FooterComponent;
