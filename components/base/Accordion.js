/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import sportData from '../../mocks/sports.json';

const AccordionComponentWrapper = styled(Box)(() => ({
  display: 'flex',
  gridGap: 16,
  gap: 16,
  '& .game__item': {
    width: '100%',
    height: 200,
    overflow: 'hidden',
    borderRadius: 16,
    position: 'relative',
    marginBottom: 16,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    cursor: 'pointer',
    flex: '1 1',
    transition: 'all linear 150ms',
    '&:nth-of-type(1)': {
      background:
        'no-repeat right / auto 100% url("https://hx1web.f384883be.com/static/media/sport-item-bg.3196774b.png"), linear-gradient(90deg, #F87700 0%, #F2D53C 100%)',
    },
    '&:nth-of-type(2)': {
      background:
        'no-repeat right / auto 100% url("https://hx1web.f384883be.com/static/media/sport-item-bg.3196774b.png"), linear-gradient(90deg, #201E93 0%, #5621ED 100%)',
    },
    '&:nth-of-type(3)': {
      background:
        'no-repeat right / auto 100% url("https://hx1web.f384883be.com/static/media/sport-item-bg.3196774b.png"), linear-gradient(90deg, #931E1E 0%, #ED215E 100%)',
    },
    '&:nth-of-type(4)': {
      background:
        'no-repeat right / auto 100% url("https://hx1web.f384883be.com/static/media/sport-item-bg.3196774b.png"), linear-gradient(90deg, #0C71AA 0%, #0CDDDD 100%)',
    },
    '&.is--active': {
      flex: '1.97 1',
      '& .img__right': {
        display: 'block',
      },
    },
    '& > img': {
      position: 'absolute',
      right: 0,
      bottom: 0,
      height: '100%',
      transition: 'transform 200ms linear, -webkit-transform 200ms linear',
      '&.img__right': {
        display: 'none',
        animation: 'fadeIn 250ms linear',
      },
    },
    '& .desc': {
      position: 'absolute',
      maxWidth: '100%',
      left: '7%',
      top: '50% !important',
      transform: 'translateY(-50%)',
      '& h5': {
        background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.6) 100%)',
        WebkitBackgroundClip: 'text',
      },
      '& p': {
        maxWidth: 250,
        marginTop: 8,
        color: 'rgba(255, 255, 255, 0.8)',
      },
    },
    '& .actions': {
      position: 'absolute',
      top: 180,
      left: 40,
    },
  },
}));

function AccordionComponent() {
  const [isActive, setIsActive] = useState(null);

  return (
    <AccordionComponentWrapper className="home_sports_game-content">
      {sportData.map((item) => (
        <div
          key={item.id}
          className={`game__item top_game_left ${isActive === item.id && 'is--active'}`}
          onMouseOver={() => setIsActive(item.id)}
        >
          <img className="img__right" src={item.srcImg} alt={item.title} />
          <div className="desc">
            <Typography
              component="h5"
              color="primary.light"
              fontSize="40px"
              fontWeight={800}
              lineHeight="1.2"
            >
              {item.title}
            </Typography>
            <Typography component="p" variant="body1" lineHeight="1.5">
              {item.desc}
            </Typography>
          </div>
          <div className="actions" />
        </div>
      ))}
    </AccordionComponentWrapper>
  );
}

export default AccordionComponent;
