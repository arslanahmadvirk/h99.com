import Link from 'next/link';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const PartnerComponentWrapper = styled(Box)(() => ({
  display: 'flex',
  '& > a': {
    display: 'block',
    '& > img': {
      height: 42,
      marginRight: 24,
    },
  },
}));

function PartnerComponent() {
  return (
    <PartnerComponentWrapper>
      <Link href="/brand_pc/FIBA/indexen.html" target="_self">
        <a>
          <img src="https://hx1web.f384883be.com/static/media/partner_01.ae4e9c0b.png" alt="fiba" />
        </a>
      </Link>
      <Link href="/brand_pc/indexen.html" target="_self">
        <a>
          <img
            src="https://hx1web.f384883be.com/static/media/partner_03.9d7ea808.png"
            alt="j9danbao"
          />
        </a>
      </Link>
    </PartnerComponentWrapper>
  );
}

export default PartnerComponent;
