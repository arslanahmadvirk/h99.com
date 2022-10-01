import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "../Button";

const GameIntroWrapper = styled(Card)(() => ({
  position: "relative",
  width: "650px",
  "@media (max-width: 567.98px)": {
    width: "300px",
  },
  marginLeft: "5px",
  borderRadius: "16px",
  display: "flex",
  flexDirection: "column",
  background:
    'no-repeat top / cover url("https://hx1web.f384883be.com/static/media/PC-Blockchain@2x.1b117fdc.png"), linear-gradient(180deg, #22073D00 0%, #8104A0 100%)',
  cursor: "pointer",
  "& .rocket-eject": {
    pointerEvents: "none",
    position: "absolute",
    right: "-23%",
    bottom: "-10%",
    width: "100%",
  },
  "& .game-intro-info": {
    padding: "26.5px 32px",
    "& .info": {
      maxWidth: 410,
    },
    "& .game-name": {
      marginTop: "48px",
      color: "#F1C44A",
    },
  },
}));

function GameIntro() {
  return (
    <GameIntroWrapper elevation={0}>
      <CardContent className="game-intro">
        <img
          className="rocket-eject"
          src="https://hx1web.f384883be.com/static/media/rocket-standard.0825423d.gif"
          alt="rocket animated"
        />
        <div className="game-intro-info">
          <div className="info">
            <Typography
              component="h5"
              variant="subtitle1"
              lineHeight={2}
              fontWeight={700}
              gutterBottom
              sx={{ color: "#CACAFF" }}
            >
              Blockchain Gaming
            </Typography>
            <Typography
              component="p"
              variant="body2"
              lineHeight="28px"
              gutterBottom
              sx={{ color: "rgba(202, 202, 255, 0.6)" }}
            >
              The algorithm of blockchain gaming industry generates real
              randomness with transparent and verifiable ways, and can be
              examined by all players.
            </Typography>
            <Typography
              component="p"
              variant="body2"
              lineHeight="28px"
              gutterBottom
              sx={{ color: "rgba(202, 202, 255, 0.6)" }}
            >
              All the results of blockchain games cannot be set in advance, even
              the banker cannot modify betting status.
            </Typography>
          </div>
          <div className="game-name">
            <Typography
              component="h1"
              variant="h3"
              color="primary.main"
              fontWeight={700}
              gutterBottom
            >
              CRASH
            </Typography>
            <Typography component="p" variant="body1" color="primary.main">
              The most popular verifiable gambling game
            </Typography>
          </div>
          <Button
            variant="contained"
            color="inherit"
            className="game-btn style1 bubbly-button"
            sx={{ mt: 4 }}
            splash
          >
            PLAY
            <span
              className="icon iconfont icon-chevron-right"
              style={{ marginLeft: 6 }}
            />
          </Button>
        </div>
      </CardContent>
    </GameIntroWrapper>
  );
}

export default GameIntro;
