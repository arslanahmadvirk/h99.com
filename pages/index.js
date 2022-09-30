import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Accordion,
  Layout,
  Banners,
  Swiper,
  ActivityItem,
  PrizePoolItem,
  EventCard,
  GameIntroCard,
  EventItem,
} from "../components";
import latestEventData from "../mocks/latest-event.json";
import liveCasinoData from "../mocks/live-casino.json";
import blockchainData from "../mocks/blockchain-games.json";
import slotsData from "../mocks/slots.json";

function HomePage() {
  return (
    <div className="mt-12">
      <Box component="section" id="banners" sx={{ pt: 3 }}>
        <Container maxWidth="xl">
          <div className="md:flex md:space-x-2">
            <Banners data={latestEventData} />
            <div className="md:flex-col space-y-3">
              <ActivityItem
                variant="swap"
                name="SWAP"
                descText="Buy & Sell J9BC"
                buttonText="Trade Now"
              >
                <Typography
                  component="h2"
                  color="primary.light"
                  fontWeight={900}
                >
                  SWAP
                </Typography>
                <Typography
                  component="p"
                  variant="body1"
                  color="primary.light"
                  fontWeight={400}
                >
                  24 Hour 13,829,008 J9BC
                </Typography>
                <div className="price">
                  <Typography
                    component="p"
                    variant="body2"
                    color="primary.light"
                    fontWeight={400}
                  >
                    Current:
                  </Typography>
                  <Typography
                    component="span"
                    variant="body2"
                    color="primary.light"
                    fontWeight={900}
                  >
                    $0.0123
                  </Typography>
                </div>
              </ActivityItem>
              <ActivityItem
                variant="loan"
                name="J9BC Loan"
                descText="Loan Pool:$ 195,874.85"
                buttonText="Details"
              >
                <Typography
                  component="h2"
                  color="primary.light"
                  fontWeight={600}
                >
                  J9BC Loan
                </Typography>
                <Typography
                  component="p"
                  variant="body1"
                  color="primary.light"
                  fontWeight={400}
                >
                  Loan &amp; Earn! Change of luck!
                </Typography>
                <div className="loan__num">
                  <div>
                    <Typography
                      component="p"
                      variant="body2"
                      color="primary.light"
                      fontWeight={400}
                    >
                      Loan Pool
                    </Typography>
                    <Typography
                      component="span"
                      variant="body2"
                      color="primary.light"
                      fontWeight={600}
                    >
                      $ 195,874.85
                    </Typography>
                  </div>
                </div>
              </ActivityItem>
            </div>
            <PrizePoolItem />
          </div>
        </Container>
      </Box>
      <Box component="section" id="events">
        <Container maxWidth="xl">
          <div className="space-y-2 mt-5">
            {/* <EventCard /> */}
            <EventItem
              title="AGIN"
              srcImg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAABmCAYAAACa20DhAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQ+SURBVHgB7Z0HuB1FFcfPi0BCSQhVKYGAhiZJkA8QoyEoLUBAqWpUBEUNBgXxkw6G+uUDIRE+pLeAdAkJNXQIvbfQIY8eQg8t1OP5M2e452127929d9/LvS/n933nu/tmZ2e2zM6eOefMPCLHcRzHcRzHcRzHcRzHcRzHcRzHcRzHcRzHcRzHcRzHcRzHcRzHcRzHcZxOoY3mIZh5Hfn5NrU+U9ra2t4lpyHmtcZ/h/z8gFqbWSLrSuN/mpyG6EHzFt+l1gc9fjs5DTMfzSNIrw91p4/++aTIWdQ69BMZrduPSa//KTlOXqTx/5Qr/IdaCDnfX5pzP5qcUpiX1J61zfZD1FqsZbafIKcU5qXGv4b+sshT1Fr80Gw/TE4plKLzy6cYPdOJ1Nx8R3/fE3mZGkCuF53G4iIriAzQ34V195ciM0WmiTwrMkN0dKY6kboWkJ919E+U+xI5pVDWgHewyPrUGsBa8gLVgTTEvvKzhcgOFK73WzUOeUPkCTnuAvmdIC/Bh1ScVUR66jZe2nfIKYWyGv8gs40H/Bk1F7jORXT7EWmEn1MBpPGiZ/+byK6mnDwspbKByOFSzkHye15BB9X3zHa7HNts97ZlKavxD9RffPK3ouYblI0UOUa3H897kDRWmEb3EvkT1e7lawE16QSRn0m5f5ZG/GzO49Y024+RUxoNN355kChjgP75tsg0ebAzqUS0jrZ6ez05fgnzZ67BrhwDh9jJ1HGwWQabiEyS8reV68lzLquZ7VazUjU1ZVh7VhTpq9vQpWdRiUgjmV9+jqDGwhIGx+IoR+8Jn4D8XE/lN/wILE/nSz3LUfXzWIjCYDriZs4SKUPtwQNcVLenS282m8plhMg/RJYRuZUKotaS2Hviy/RCjfyj5OdYkQWpOogTupuCt/hFEVw3vjDwJP9EZCOqfn+hyx8n9e0o9+yLjDxQu/rrNsp/hpzmQR7eH4338RAqESlvZZH3tOyPRZamgsgxK4m8q2U8INKzSt6/iXzC2byBaxRZJUe934Q3VmRWlfI+F9lNpC2jjCEm74PkNBcIFTAP6KdUEhhsityZaCyjChaDcn4k8oUeP7FKvh2qNPzPRP4rsjIVRI4ZLDKVs3k562WS9N+bfGeS01zIQ7nFPKDSYuWlrHEpDeVekYULljPKHD8mI88aHHr1NJCO2Jq6x0dy7NIid3M2+2UcZ+/BnuQ0F/JQ3teH8wGVhJR1oMjslEbypcjQgmWdYI7fKmV/X5HHMhrlCxy812Vc0wqc/YI9zinqmKTdaPJsSk7zIA+kn3k4d1IJSDkbi7zN2ZxVsDyrcnwnZf+YjHpeEhlIJSLl7ZNRF8YzgxJ5F+Lw8gGMG1YvUA/GG+sbWZxKQM9pXS1zTW7ga9jyyMVvZh7gydQgUsbyHHrBaryOh1ugzDjY/TD5sOTvb4l8kFIHdPyNqGSkzEVFdhT5RYosn8i7ijk3jAtyqXuSr5fIxMT1bEYlIOUM5cr46XrOGKjPE8jF729u8O7UAGiYIpM5H7n0X+74Zbonsa9NZEJG+QfSXEbOYRMOah64rsBxo1OuZ2cqASnnKFPmX6jFafSzFacFwnk0jRoDM5VG5Mz7W873ybWqRDIUGOe+TcoxmBt7Ks19oHLFnjXXvZV7AufZmJRdfalBtJc/hYKzEXIutTh1O7k4eF5jWMP71ECorZS1LgUvbt7PKAahG4tcWyOfDQpLhgZsTelBameK0+l1mvvY+cb31crMIQTkDJElRRC4d6TIwbq7b8YxcABuSSHwbiUK9+NVCs670xMOS3jJh+v2c7LvLlMOJgqh48K4BL6YN0Ww/2zJ9zZ1N+SClxB5UT+BGJgtRHUgxy3J2Xbw+0Xeydj3vxxlW7Vm88S+u1LKfF97z7kOd/RxrFoj7zc4qDtRTYLneJg5fnzKMTC/wnfxYcp9wJjnXDYWKNk+2ew/yKTvIvIap3MRh5eye8FhQBYHPzdSncixx2bcOFh8vidySsZ+vBT9q5Q7H1caEAaOq5t9fcy5W27jJrFgcGWw+16OvJtwxUJ2n0hvkbU5WJHAOSnHnKb7cB/gTxgpcoDITE3Hi7SZ5kV5z2o6TNDrazoG79Ex+JzIwRzM1NGrjX3fp+4GB49oZBzVgRz3B04HPc+vNM8POL13AodUKRtfptgjwWy5kNm3cUZ546kJkPP4tjmnW2rk7WOuE78rafogc98uTxwzn95j0C6yIqvlRn434OAY/DGHyTtI20jkU83/EAd1Kd7HvUQwV2EFU/5lmhfhG03b+Bv5JFn1oPBgl8PqaYdl7B4rcp5uQ/+Evj4kJd+vceMzQp1hOlxKt5+VPB+ZfVmqTaF4eam7l/zA8rQi1Q8m/xwh52dnaNkY/kcpu358pY6nMNcAwXF7SjnTdTeia7HECV76xdC4E9MpcT/66Lk/IgIP9NXye4XkSwYQwjk4v25fZZZOQT4ECiJwcDgHEzTGgT/S/a9QdwzGkwu92PROQwoeu7jI7ZzOddqobP7RnM3mGXXYsIbjEvuOzihrCyoABz/BTG6MB0V6J8o9xOz/Y5X6f8WhdwVQMW4ycmeijuQ9RUDi+ynnAy/0oYm87boPKtJQTVtL5GauHgh4BnU3OAywntYLhO6de5YTB3v+RRk365m0sjg4v97KOOYCDpan5DHnmDyjEvvGZZS1HRWAQ9Bco5zKczrfYseSGc4h6auKvJmzjudFFk0pYxkOej5elI8SxwzSPN83aY9w8PIuyBVVC43/dA5jBnh+LzP5h1MTU6/asyyFaXmgnXJOYNGHvK/Itim7YVbbTT6pM5I7JA0eTkRk/j7lOHySEW2ZnBVlVYe8M6CWoWLkDjmoAlZg+zL+waGHXkn/xFzfOVaa4GCFgbqD+QNQZW4QSYutQuNDefAOL6DHDaOwkgWu9Wip+whJh5oJvwLUntj5xK/Rjqa8qVAfOcRIxXyYHnoAVCp9YeIEIKhf91J3g8MgNFpLJhU4bkOuDJws6OEOrnHsUM7mH4m8dkCH8IalE/v/mVHOaVQAzv6C5AXXvUmiTJggYwDcdE4xFUra3qYMhBn0yDi/ZzQPBr7LieAFsEF8MIniCwLL3V+5osK8IjI/hx7+PlPGMC13Z1PGtRx6/F1MfSB3u2gp9EIjR+Q8xlpfklzOOfwEHHTXNJ7gjtac75p9DyfLTjw8C/wWi1FOJO+t3BjQuVdJlLmO2T8xpc4fcsX3gTinAVXOz+r9K2saBqbvVjmnV0U20LzrcaUTwbX20HQEtaVZ4F4020dRk1Ov2mOjHWvOMOLwucXgJ21sAO8wBqTo8WoVhc9yWogxGtCPRa5MOb/2hKWHqpwzFoTFJ30C5ePXVDtEBLr2OD2/JFNpzmmV1hL1ZMoxGAPcrNuXyLVVs6YgJiiqkV9Ny5T813AwUGAplvWosnjvDM0/wawsAevNFbo9Mapn8ouvx84UVrbAM20XOVOvJcZdtVN3hMOnNlLTIyp59uOK97GzuNTUd6RJH5tyPlCLsmLrn+SCE2aqXDeiOM/NqAe993opx4w1eXYip7kwDQfevh418sIR8gF3Pvg8R+fLVSZ9u4zzOqlKWWfHshq4R8tyx1luSfbIOO5a3Y/OotT5BE6DcLBtR6bVyAuz2GPcNbyldSKe3Y4N1so4t2E8p3kvgsE8vlbfoPruEaZFVpu3ezOnm2cxII0mZJgxl8pZH+5zfw66+JLkdA5yc7c3D/GcGnnP5a7jBq0TY4c4IIQDaIGMc2vLcX5YXGog55y0wWH+wHhOdx5F7kG+jOP7m3OvtdIEwhp25/CSJeOUYK3BXItcL09XIOeClepeU5lMrQh39I7uXSUfPKyzuesYp/WuZ9Ier3EteFFerFEurBpQg7bmMD0QvWwvFej0mJu7DYcI0tdrlAWr1OpVzifvShO4xoe5NlD/Shm/NAp3dDruQU1APdaemjE9HOK7YepK67muoYoFohF+I2LVkhgDs2at84tgWUUO3t8LKXsBWphJd1JB/A3iVeJCt3D0wYfQi2qD+PYta8S3497GMVTqOvwc1DjY0KPlDHE5Z1OIS0J8D+Y5wAqDL95w3T6M5iIc1EesWH2WJl1fI//X23K/qu63+Wodl6RQ4+egQsTGBfPh9JQ88E5iSe7eKUVcJvLLMlZ1k3o+obCALIAJLpoFB5ts99cqR84FveMfZPN0Cg29GoupFAFBdyeJHCh11fKE2wHuHOfOIYQ7emERXIbplv9O/I+uGyTfcxRmo6EFYMB/WKIcBP3hJYpfhecprLH6USIflqLprXXB/AmvMCYeoTGjY3kc5k8OvhFYrhAFig7itkRZMPdG8/Es2fe8OY8lzTmg9SLgESZWmMCxVM3M2JC1ceMPdDqIFoWZFh5wBOXhPg/Sc8N2uYv6cvAExhXUECbcJ7EfasDlGZ9gxJcsRyXBIeYkqggYHK6g6dYMu3WB8kZw/liZPMD6BCfThpx/zGCdZmkrTZxh9o/l7JXeoJLB3IvV4LYw6Zg4dCLPGSeFsREsU8ubvBi/QCXEnIBpHCa+2PuD9O21jpdMOl6GSYnzOUXzQ/bRtPm1zo+1XATzvcCVQD3W/TGsGtJbr+sVrpjO4ZXGuqebcrAqorxLqGyk0J+YE7stZf++nA5OamMqEQ669x1aPiZaINhuQa7o8NDVBxUsE9aSa7hx8HAQ555HHbL1v2XOPRnshrFFbBjIV3Txrh6Ja0NveSF3nCl3jMn/s8Q1zeAQcNdu0j7Qc7qSO3qT0SktZuqNka/oENbRdHjh42SbL7UcRPpO5sp1opztODR8PO/zTR14YbBKxVP69/Nm32+pbKTQP5sKjk/sG8Hps6NwYftTJyDl7qp1XKx/I05llnlYi9ZRJh4WJnSgoVQLA0iChoCv3rZcsNFrvZkrTej+Q83+pBqDOsemCILWFtc8eLERfQkL1hia8x6Cc0z6BSYdjfKbmr6HSYdBY4Smr2HSYe2KoRDDTDpUzAU1fTeTjlloW3Jo5Lj/V2o62s5Wmm7bHr4Qy2k5i4g8avahIyxt5UB7k+2Uwt1N+gDOtprgZvekToDDamvouQ7Rvzc19d5EDcDBFIreFhNmYL6cwsFnMV0F+uilHD7DaHwIHKvLL6D12TWQTk05l+vM/s3Nvh5cmWKYBNalRUzenhz8NFBfYVnaiYPPITJK8y3MlRcfvpABpgxrHsYLGWeA2Vl5k01+60zcRdMg0Q+CBr6rSYcJd5ruw0uBtoXnHNdzwtdjeOL+nGrqOJM7Yyoqd/y0bahp+Bxl6fmw6S5BnQiHuai/0O09Td2lrhjd2XBwqkVGJ/ahMT6i+/CFGWj24QV9yIgNHjxW88B5hvm2UBOrrRq9oua3ncgkUxca4cuaDi9/P7PPtoGR5ryjkxP14suM9KW4oiXgCz2f5ocM4cTCWBzGTVHH/3oapTlmkql7GyobPYkYyYfP2rKaPobT43YQurwhdTIcQp376fbZpv7NqYXgMKCMbJTYB0NC9PziGQyuUs6lmg/PZIimHWyeEXrT8zg4wcabOq8wZdhVL3Yw6YgIjfo4dPOo2mAp+Th2gEEkvkR2hbdrNQ2yuyn/aFM+2tix5vz30Px/Mfn3N/njCxnHDnjBGgpLybqpdlI1PkuL6M1Ic2R9rje3S1dC4LDUSaQ/tQgcLB93mcazamI/BvM2TgiqVlsiD9QfqAgzNA8C9PDSLGAaJr4Ka2lepFvH0/ZaDqaYRjUKA9V+pnyrXvzG1G3/Q/wUzYv06BBFQx6tabiWGL8EFSbOEYj6exz0oyGvxuGFODJx7WTKsqt/FFpIq4id35resLARBi5ZjiwsWnu8naHU2WhjsP+/CqazLqu/QXAPo14NX0CHBcDwn1s4LFm4gSb9XQQvCSb3w/iNBopeHqbduI7p/XIc8sAnEBetgm8E/y8NvePvqDKjDnXeoduwkMUB48NSRjwXDJyjro37apdQtP+XYYra/tG24kQd2N1v0G3Y9WO8FZyd1pk3lCozBGGnn67X96bJ83PUIYKFxTCGsCriFOoMuOO6nOgBzuJ0oOOtSl0Md/wytTI3ZVwfJgM9k5I/TeWENSRONMeYzFqtMFkFplj7xUaoRLTC2PAVa9SwMV1TTbodHEMlQ2+NdKy5FAMHYRzoqel2yZsJphz08HZhrEM1PVrxrI9httb5mUnDF6OQlaeIWjIwsZ1mS8U80r1y/pfBslmNugepS5XIPUXUKnpSmCPtUi1R/YHXHHo7vN5rS/6pehw8rXAsxTm+8NIiDGIMVXpUtAM0Pphoo1MMHtarTT22dz/PbGPOLpyd6KEfoMpSJRi39NL0a+Q8PtFz3VrT8PX4ajDNwXMLq9RQs8+uyPe0Xlf8EuB8ES7yL5PnbqnjOSpAXs8jPmG3U3Bhg5/rCSXBBT6ZWB+mS+DgEcXNrDa5Bq53WANqroI2F5mRNonfoo0UX1fEFaFRQw19LRHmkDwGPg+sXYp78ES1vM2CvhR46WBcwSwx/DdKxEZ9TCHkAnOu46IGI+Wazqey4WCaelU/LxjMNkWkYBIOS3FYs1cSxPnXtaao0/VwR+sPmKzPGNG1+H9lcZIUVO0+1Blw8N5F3bKp/ysgB9PX4RmNfyI5LYPq+yO547jmde4YOg79f6t6ys9r7cHnMqpIcLb0p+YGn0OEHWO+gf1/uo3+DwGnC9EwZYwvYLGCqg3/QbTjQ7+HtWu85KtrfaC8Ov/h8nOA/jlbpRVAw7em2O3lRtVc2txpLlT3R6OHahM77E8S65sWJm/Pb/9RQi/KN3mjGSk3xtvpEjSeHwPcN6lE8jZ+vHV5l/xrVqAGdb8Vg526yav2tGpPb2G1NTuO4ziO4ziO4ziO4ziO4ziO4ziO4ziO4ziO4ziO4ziO4ziO4ziO4ziO4ziO4ziO4ziO4ziO4ziO4+Tj/w8o1VaiNXBoAAAAAElFTkSuQmCC"
              descText="Thousand of gamers Interaction with beauties"
              limitText="Limit 5～300,000USDT"
            />
            <EventItem
              title="EVO"
              srcImg="data:image/png;base64,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"
              descText="Multiple games on one screen"
              limitText="Limit 1～50,000USDT"
            />
          </div>
        </Container>
      </Box>
      <Box component="section" id="blockchainGaming">
        <Container maxWidth="xl">
          <Box
            display="flex"
            sx={{
              width: "100%",
              marginTop: "64px",
            }}
          >
            <Box
              sx={{
                flex: "1 1",
                width: "1px",
              }}
            >
              <Typography
                component="h5"
                variant="h6"
                color="primary.light"
                fontWeight={600}
                gutterBottom
              >
                Blockchain Games
              </Typography>
              <Swiper
                scwHeight={470} // height of wrapper
                bgiHeight={125} // height of item
                data={blockchainData}
                slidesPerView={4}
                grid={{
                  fill: "row",
                  rows: 2,
                }}
                spaceBetween={16}
              />
            </Box>
            <GameIntroCard />
          </Box>
        </Container>
      </Box>
      <Box component="section" id="liveCasino">
        <Container maxWidth="xl">
          <Box
            display="block"
            sx={{
              width: "100%",
              marginTop: "64px",
            }}
          >
            <Typography
              component="h5"
              variant="h6"
              color="primary.light"
              fontWeight={600}
              gutterBottom
            >
              Live Casino
            </Typography>
            <Swiper
              scwHeight={440} // height of wrapper
              bgiHeight={123} // height of item
              data={liveCasinoData}
              slidesPerView={8}
              grid={{
                fill: "row",
                rows: 2,
              }}
              spaceBetween={16}
            />
          </Box>
        </Container>
      </Box>
      <Box component="section" id="slots">
        <Container maxWidth="xl">
          <Box
            display="block"
            sx={{
              width: "100%",
              marginTop: "64px",
            }}
          >
            <Typography
              component="h5"
              variant="h6"
              color="primary.light"
              fontWeight={600}
              gutterBottom
            >
              Slots
            </Typography>
            <Swiper
              isOneInTwoGrid // if the first item wants to wider
              scwHeight={440} // height of wrapper
              bgiHeight={123} // height of item
              data={slotsData}
              slidesPerView={8}
              grid={{
                fill: "row",
                rows: 2,
              }}
              spaceBetween={16}
            />
          </Box>
        </Container>
      </Box>
      <Box component="section" id="slots">
        <Container maxWidth="xl">
          <Box
            display="block"
            sx={{
              width: "100%",
              marginTop: "64px",
              marginBottom: "64px",
            }}
          >
            <Typography
              component="h5"
              variant="h6"
              color="primary.light"
              fontWeight={600}
              gutterBottom
            >
              Sports
            </Typography>
            <Accordion />
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default HomePage;
