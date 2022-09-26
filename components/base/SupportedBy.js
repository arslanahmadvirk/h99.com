import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

const SupportedByWrapper = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  "& > a": {
    position: "relative",
    display: "flex",
    "&:last-child": {
      "&::after": {
        display: "none",
      },
    },
    "&::after": {
      position: "absolute",
      content: '""',
      height: 26,
      width: 1,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      right: 17.5,
      top: "50%",
      transform: "translateY(-50%)",
    },
    "& > img": {
      height: 42,
      marginRight: 35,
    },
  },
}));

function SupportedBy() {
  return (
    <SupportedByWrapper>
      <Link href="#">
        <img
          src="https://hx1web.f384883be.com/static/media/Sponsor-fiba-en.6e1e321c.png"
          height="42"
          alt="fiba"
        />
      </Link>
      <Divider orientation="vertical" variant="middle" light flexItem />
      <Link href="#">
        <img
          src="https://hx1web.f384883be.com/static/media/Sponsor-badi-en.aaeacb32.png"
          height="42"
          alt="badi"
        />
      </Link>
    </SupportedByWrapper>
  );
}

export default SupportedBy;
