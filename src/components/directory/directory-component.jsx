import React from 'react';

import MenuItem from '../menu-item/menu-item-component';
import HOMEPAGE_DATA from '../../assets/data/homepage_data'

import './directory.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: HOMEPAGE_DATA
    };
  }

  render() {
    return (
      <div className='directory-menu'>
      {
          this.state.sections.map(({ id, ...otherProps}) => (
              <MenuItem key={id} {...otherProps} />
          ))
      }
      </div>
    );
  }
}

export default Directory;