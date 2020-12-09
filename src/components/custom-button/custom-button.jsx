import React from 'react';

import './custom-button.scss';

const CustomButton = ({ children, isGoogleSignIn,width,inverted, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;