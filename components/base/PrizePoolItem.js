import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from './Button';

const PrizePoolWrapper = styled(Box)(() => ({
  gridRow: 'span 2',
  cursor: 'pointer',
  padding: 24,
  background:
    'no-repeat bottom right / 45% url(https://hx1web.f384883be.com/static/media/Cat@2x.227d72ec.png)',
  '& .entry-wrapper_pool-amount': {
    margin: '24px 0 8px 0',
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: '24px',
    '& .amount-num': {
      display: 'flex',
      alignItems: 'center',
      fontSize: '54px',
      fontFamily: '"Montserrat-ExtraBold", sans-serif',
      backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #6eb4fa 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      '& .custom-font': {
        fontSize: '54px !important',
        lineHeight: 'normal',
        backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #6eb4fa 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
      '& .scroll-num': {
        width: '34px',
        fontSize: '48px',
      },
    },
  },
}));

function PrizePoolItem() {
  return (
    <PrizePoolWrapper>
      <div className="entry-wrapper_pool">
        <Typography component="h4" variant="h5" color="primary.main" fontSize={28} fontWeight={600}>
          Hold J9BC enjoy dividends
        </Typography>
        <div className="entry-wrapper_pool-amount">
          Current prize pool :
          <Typography
            component="h2"
            variant="h2"
            fontSize={54}
            fontWeight={800}
            sx={{
              backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #6eb4fa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            $255,038
          </Typography>
        </div>
        <Typography
          component="h2"
          variant="h2"
          fontSize={20}
          fontWeight={900}
          sx={{
            backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #6eb4fa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: '8px',
          }}
        >
          Total dividends : $4,797,916
        </Typography>
        <Typography
          component="p"
          variant="body2"
          className="apy"
          lineHeight="1.5"
          fontWeight={600}
          sx={{ color: 'rgba(255, 255, 255, 0.4)' }}
        >
          APR：51.83%+
        </Typography>
        <Button
          variant="contained"
          color="inherit"
          size="large"
          className="style1 bubbly-button"
          sx={{ mt: 4 }}
          splash
        >
          Get dividend
        </Button>
      </div>
    </PrizePoolWrapper>
  );
}

export default PrizePoolItem;
