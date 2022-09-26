import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const EventItemWrapper = styled(Card)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  backgroundColor: '#26134e',
  padding: '16px 0 16px 16px',
  overflow: 'hidden',
  cursor: 'pointer',
  height: '156px',
  borderRadius: 16,
  transition: 'all 0.15s ease-in-out',
  '&:hover': {
    backgroundColor: '#60159b',
    '& button': {
      backgroundColor: '#702ca1',
    },
  },
  '& .image': {
    width: 164,
    borderRadius: 16,
  },
  '.MuiCardContent-root': {
    flex: '1 1',
    paddingLeft: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    '& ul': {
      display: 'flex',
      padding: 0,
      margin: '6px 0',
      listStyle: 'none',
      '& li': {
        fontSize: 14,
        color: theme.palette.primary.light,
        whiteSpace: 'pre-wrap',
        marginRight: 24,
        display: 'block',
      },
    },
  },
  '& button': {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: '100%',
    right: 0,
    top: 0,
    backgroundColor: '#311f57',
    transition: 'all 0.15s ease-in-out',
    '& span': {
      fontSize: 24,
      color: '#7b7b9d',
      transform: 'rotate(90deg)',
    },
  },
}));

function EventItem({
  title,
  srcImg,
  descText,
  limitText,
}) {
  return (
    <EventItemWrapper elevation={0}>
      <div
        className="image"
        style={{
          background: `no-repeat center / 85% url('${srcImg}') rgba(255, 255, 255, 0.05)`,
        }}
      />
      <CardContent>
        <Typography component="h5" variant="h5" color="primary.light">
          {title}
        </Typography>
        <ul>
          <li>{descText}</li>
        </ul>
        <Typography component="p" variant="caption" sx={{ color: '#ABACFD' }}>
          {limitText}
        </Typography>
      </CardContent>
      <CardActionArea>
        <span className="icon iconfont"></span>
      </CardActionArea>
    </EventItemWrapper>
  );
}

EventItem.propTypes = {
  title: PropTypes.string.isRequired,
  srcImg: PropTypes.string.isRequired,
  descText: PropTypes.string.isRequired,
  limitText: PropTypes.string.isRequired,
};

export default EventItem;
