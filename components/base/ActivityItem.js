import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Button from './Button';

const ActivityItemWrapper = styled(Box)(() => ({
  position: 'relative',
  borderRadius: 16,
  overflow: 'hidden',
  '& .home-top-entry_card-mask': {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '2',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    opacity: '0',
    cursor: 'pointer',
    borderRadius: '16px',
    transition: 'opacity 0.2s ease-in-out',
    '&:hover': {
      opacity: 1,
    },
    '& > p': {
      marginTop: '4px',
      lineHeight: '1.5',
      opacity: '0.6',
    },
  },
  '& .swap__details': {
    position: 'relative',
    padding: '21px 16px',
    overflow: 'hidden',
    background:
      'no-repeat right / contain url(https://hx1web.f384883be.com/static/media/PC-Swap@2x.d0beb337.png), linear-gradient(90deg, #0052D4 0%, #4364F7 50%, #6FB1FC 100%)',
    cursor: 'pointer',
    '& > h2': {
      fontSize: 30,
      lineHeight: '24px',
    },
    '& > p': {
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: 12,
      lineHeight: '24px',
      marginTop: 8,
    },
    '& .price': {
      marginTop: '16px',
      display: 'inline-flex',
      alignItems: 'center',
      position: 'relative',
      zIndex: '1',
      padding: '0 12px',
      height: '36px',
      '&::after': {
        content: '""',
        position: 'absolute',
        background: 'linear-gradient(180deg, #F9CD55 0%, #FFBA00 100%)',
        height: '100%',
        width: '100%',
        top: '0',
        left: '0',
        WebkitTransform: 'skewX(-8deg)',
        transform: 'skewX(-8deg)',
        borderRadius: '4px',
        zIndex: '-1',
      },
      '& > p': {
        fontSize: '12px',
        color: '#071e5e',
        WebkitTransform: 'skewX(-8deg)',
        transform: 'skewX(-8deg)',
        whiteSpace: 'pre-wrap',
        marginRight: '4px',
      },
      '& > span': {
        color: '#071e5e',
        fontStyle: 'italic',
        fontSize: '20px',
        lineHeight: '23px',
      },
    },
  },
  '& .loan__details': {
    display: 'flex',
    flexDirection: 'column',
    padding: '24px 0 14px 16px',
    background:
      'no-repeat right / contain url(https://hx1web.f384883be.com/static/media/PC-Defender@2x.561cb27a.png), #5738ad',
    '& .loan__num': {
      marginTop: '8px',
      marginLeft: '-4px',
      height: '48px',
      display: 'flex',
      '& > div': {
        display: 'inline',
        padding: '8px',
        borderRadius: '8px',
        background: 'rgba(0, 0, 0, 0.2)',
        '& > p': {
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '12px',
          lineHeight: '12px',
        },
        '& > span': {
          display: 'inline-block',
          marginTop: '4px',
          color: '#faca46',
          fontSize: '16px',
          lineHeight: '16px',
          fontWeight: '600',
        },
      },
    },
    '& > h2': {
      fontSize: 30,
      lineHeight: '24px',
    },
    '& > p': {
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: 12,
      lineHeight: '24px',
      marginTop: 8,
    },
  },
}));

function ActivityItem({
  variant,
  name,
  descText,
  buttonText,
  children,
}) {
  return (
    <ActivityItemWrapper>
      <div
        className="home-top-entry_card-mask"
        style={{
          background: `${
            variant === 'swap'
              ? 'linear-gradient(90deg, rgb(0, 54, 140) 0%, rgb(67, 100, 247) 100%)'
              : 'rgba(66, 43, 130, 1)'
          }`,
        }}
      >
        <Typography component="h2" variant="h5" color="primary.light" fontWeight={900}>
          {name}
        </Typography>
        <Typography component="p" variant="body1" color="primary.light" fontWeight={400}>
          {descText}
        </Typography>
        <Button
          variant="contained"
          color="inherit"
          size="small"
          sx={{ mt: 2, px: 4 }}
          className="style1 bubbly-button"
          splash
        >
          {buttonText}
        </Button>
      </div>
      <div className={`${variant === 'swap' ? 'swap__details' : 'loan__details'}`}>{children}</div>
    </ActivityItemWrapper>
  );
}

ActivityItem.propTypes = {
  variant: PropTypes.oneOf(['swap', 'loan']).isRequired,
  name: PropTypes.string.isRequired,
  descText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ActivityItem;
