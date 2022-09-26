import Link from 'next/link';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const LogoWrapper = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  textAlign: 'center',
  minHeight: 60,
  '& > a': {
    display: 'flex',
    '& > img': {
      maxWidth: 166,
    },
  },
}));

function Logo() {
  return (
    <LogoWrapper>
      <Link href="#">
        <a>
          {/* <img src="https://hx1web.f384883be.com/static/media/J9logo.71989e85.svg" alt="h99 logo" /> */}
          <h4 className="text-4xl text-yellow-300 font-bold">H99.com</h4>
        </a>
      </Link>
    </LogoWrapper>
  );
}

export default Logo;
