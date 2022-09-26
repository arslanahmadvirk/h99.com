import Link from 'next/link';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const LicenseComponentWrapper = styled(Box)(() => ({
  display: 'flex',
  '& > a': {
    display: 'block',
    '& > img': {
      height: 42,
      marginRight: 24,
    },
  },
}));

function LicenseComponent() {
  return (
    <LicenseComponentWrapper>
      <Link href="/brand_pc/FIBA/indexen.html" target="_self">
        <a>
          <img
            src="https://hx1web.f384883be.com/static/media/CuracaoPC.a2af7634.png"
            alt="curacao"
          />
        </a>
      </Link>
      <Link href="/brand_pc/indexen.html" target="_self">
        <a>
          <img
            src="data:image/png;base64,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"
            alt="eigteen"
          />
        </a>
      </Link>
    </LicenseComponentWrapper>
  );
}

export default LicenseComponent;
