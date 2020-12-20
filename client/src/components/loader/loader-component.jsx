import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './loader-styles';

const Loader = Component => ({isLoading, ...otherProps}) => (
    isLoading ? <SpinnerOverlay><SpinnerContainer/></SpinnerOverlay> : <Component {...otherProps}/>
)

export default Loader;