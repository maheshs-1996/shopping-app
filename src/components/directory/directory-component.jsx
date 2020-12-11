import React from 'react';

import MenuItem from '../menu-item/menu-item-component';
import {connect} from 'react-redux'
import {selectDirectory} from '../../redux/selectors'

import './directory.scss';

const Directory = ({sections}) => {
  return (
    <div className='directory-menu'>
      {
        sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))
      }
    </div>
  );
}

const mapStateToProps = state => ({
  sections : selectDirectory(state)
})

export default connect(mapStateToProps)(Directory);