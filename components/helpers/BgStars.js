import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const BgStarWrapper = styled(Box)(() => ({
  position: 'fixed',
  zIndex: '-1',
  width: '100vw',
  height: '100vh',
  background:
    'no-repeat top / cover url("https://images.unsplash.com/photo-1483401757487-2ced3fa77952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80")',

  '& .meteor': {
    width: '1px',
    display: 'block',
    position: 'absolute',
    backgroundColor: 'transparent transparent transparent rgba(255, 255, 255, 0.5)',
    opacity: '0',
    WebkitAnimation: 'meteor 15s linear infinite',
    animation: 'meteor 15s linear infinite',
  },
  '& .star': {
    position: 'absolute',
    zIndex: '9',
  },
  '& .change': {
    width: '50px',
    height: '50px',
    border: 'none',
    position: 'absolute',
    left: '81.8%',
    top: '169px',
    WebkitAnimation: 'myChange 8s linear',
    animation: 'myChange 8s linear',
  },
  '& .star::before': {
    content: "'★'",
    display: 'block',
    position: 'absolute',
    left: '10px',
    top: '20px',
    width: 'auto',
    height: 'auto',
    color: '#fff',
    WebkitTransform: 'scale(0.8)',
    transform: 'scale(0.8)',
    WebkitAnimation: '1s starlight linear infinite',
    animation: '1s starlight linear infinite',
    WebkitAnimationFillMode:
      'forwards -moz-animation-fill-mode forwards animation-fill-mode forwards',
  },
  '& .star::after': {
    content: "'★'",
    display: 'block',
    position: 'absolute',
    left: '40px',
    top: '120px',
    width: 'auto',
    height: 'auto',
    color: '#fff',
    WebkitTransform: 'scale(0.8)',
    transform: 'scale(0.8)',
    WebkitAnimation: '2s starlight linear infinite',
    animation: '2s starlight linear infinite',
  },
  '& .meteor::after': {
    content: "''",
    display: 'block',
    border: '1px solid #fff',
    borderWidth: '0px 90px 2px 90px',
    borderColor: 'transparent transparent transparent rgba(255, 255, 255, 0.5)',
    WebkitTransform: 'rotate(-45deg)',
    transform: 'rotate(-45deg)',
  },
  '& .moon': {
    width: '100px',
    height: '100px',
    background:
      'url(https://hx1web.f384883be.com/static/media/Moon.8b8de6f5.svg) no-repeat center center',
    position: 'fixed',
    WebkitAnimation: 'myMoon 3s linear forwards',
    animation: 'myMoon 3s linear forwards',
    top: '140px',
  },
}));

function BgStars() {
  return (
    <BgStarWrapper>
      <div className="moon" />
      <div className="change" />
      <Box
        component="span"
        className="meteor"
        sx={{ left: '480px', top: '40px', animationDelay: '0s !important' }}
      />
      <Box
        component="span"
        className="meteor"
        sx={{ left: '768px', top: '40px', animationDelay: '0.9417s !important' }}
      />
      <Box
        component="span"
        className="meteor"
        sx={{ left: '1056px', top: '40px', animationDelay: '3.63215s !important' }}
      />
      <Box
        component="span"
        className="meteor"
        sx={{ left: '1344px', top: '40px', animationDelay: '3.88935 !important' }}
      />
      <Box
        component="span"
        className="meteor"
        sx={{ left: '1632px', top: '40px', animationDelay: '5.50916s !important' }}
      />
    </BgStarWrapper>
  );
}

export default BgStars;
