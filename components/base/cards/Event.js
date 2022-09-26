import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '../Button';

const EventCardWrapper = styled(Card)(() => ({
  gridRow: 'span 2',
  position: 'relative',
  borderRadius: 16,
  overflow: 'hidden',
  '& .meta': {
    display: 'flex',
    color: '#F9F5F3',
    lineHeight: '28px',
    '& ul': {
      display: 'flex',
      margin: 0,
      padding: 0,
      listStyle: 'none',
      '& li': {
        marginRight: 12,
        fontSize: 14,
        '& i': {
          marginRight: '8px',
          fontWeight: '900',
          fontStyle: 'normal',
        },
      },
    },
  },
  '& .desc': {
    marginTop: 72,
  },
  '& .media__video': {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '329px',
    overflow: 'hidden',
    borderRadius: 16,
    '& video': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'fill',
    },
  },
}));

function EventCard() {
  return (
    <EventCardWrapper elevation={0}>
      <CardContent
        sx={{
          borderRadius: '16px',
          padding: '32px',
          cursor: 'pointer',
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '100%',
          zIndex: 2,
          background:
            'no-repeat right / contain url("https://hx1web.f384883be.com/static/media/PC Live-Human@2x.9b45cb60.png"), transparent',
        }}
      >
        <div className="meta">
          <Typography
            component="p"
            variant="body2"
            color="primary.main"
            lineHeight="28px"
            sx={{ mr: '32px' }}
          >
            <span className="icon iconfont" style={{ marginRight: '6px' }}>
              
            </span>
            Global Baccarat Championship
          </Typography>
          <ul>
            <li>
              <i>·</i>
              VIP Baccarat
            </li>
            <li>
              <i>·</i>
              Classic Baccarat
            </li>
            <li>
              <i>·</i>
              BID Baccarat
            </li>
          </ul>
        </div>
        <div className="desc">
          <Typography
            component="h2"
            color="primary.light"
            fontSize="44px"
            lineHeight="1.5"
            className="ag-font"
          >
            AGQJ
          </Typography>
          <Typography component="p" variant="body2" lineHeight="18px" sx={{ color: '#CBD6FF' }}>
            Million Limits, Multi-Table Betting | Limit 5～700,000USDT
          </Typography>
        </div>
        <Button
          variant="contained"
          color="inherit"
          className="style1 bubbly-button"
          sx={{ mt: 4 }}
          splash
        >
          PLAY
          <span className="icon iconfont" style={{ marginLeft: '6px' }}>
            
          </span>
        </Button>
      </CardContent>
      <div className="media__video">
        <video id="video" loop>
          <source
            src="https://s01.syblc.com/d7656416-e600-11ec-9112-c177d68f1050.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </EventCardWrapper>
  );
}

export default EventCard;
