import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ActiveLink from '../helpers/ActiveLink';

const NavWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: 48,
  marginTop: 24,
  textAlign: 'center',
  '& > a': {
    color: theme.palette.primary.light,
    fontFamily: 'Montserrat',
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: 40,
    margin: '0 17px',
    fontSize: 16,
    lineHeight: '40px',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    borderBottom: '1px solid transparent',
    textDecoration: 'none',
    '&.active': {
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      '& .icon': {
        opacity: 1,
      },
    },
    '& .icon': {
      opacity: 0.6,
      fontSize: 18,
    },
  },
}));

const navItems = [
  {
    id: 1,
    name: 'Home',
    icon: '',
    url: '/',
  },
  {
    id: 2,
    name: 'Buy Ticket',
    icon: '',
    url: '/buy-ticket',
  },
  {
    id: 3,
    name: 'About Us',
    icon: '',
    url: '/about-us',
  },
  {
    id: 4,
    name: 'Contact Us',
    icon: '',
    url: '/contact-us',
  },
  {
    id: 5,
    name: 'Report',
    icon: '',
    url: '/report',
  },
  // {
  //   id: 6,
  //   name: 'J9BC',
  //   icon: '',
  //   url: '/j9bc',
  // },
  // {
  //   id: 7,
  //   name: 'J9 Brand',
  //   icon: '',
  //   url: '/j9-brand',
  // },
  // {
  //   id: 8,
  //   name: 'Promo',
  //   icon: '',
  //   url: '/promo',
  // },
];

function Navs() {
  return (
    <NavWrapper component="nav" sx={{ display: { xs: 'block', sm: 'block' } }}>
      {navItems.map((item) => (
        <ActiveLink key={item.id} activeClassName="active" href={item.url}>
          <a className="nav-link">
            <span className="icon iconfont" style={{ marginRight: 5 }}>
              {item.icon}
            </span>
            <Typography component="p" variant="body1" fontWeight="500">
              {item.name}
            </Typography>
          </a>
        </ActiveLink>
      ))}
    </NavWrapper>
  );
}

export default Navs;
