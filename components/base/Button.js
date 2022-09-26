/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import Button from '@mui/material/Button';

function ButtonComponent({ splash, children, ...props }) {
  const [isActive, setIsActive] = useState(false);

  if (splash) {
    return (
      <Button
        classes={{ root: `style1 bubbly-button ${isActive && 'animate'}` }}
        onMouseOver={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        disableElevation
        {...props}
      >
        {children}
      </Button>
    );
  }

  return <Button {...props} disableElevation>{children}</Button>;
}

export default ButtonComponent;
