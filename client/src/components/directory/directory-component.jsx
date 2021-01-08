import React, { Component } from 'react';

import MenuItem from '../menu-item/menu-item-component';
import { connect } from 'react-redux'
import { selectDirectory } from '../../redux/selectors'
import { loadHomepageData } from '../../redux/data/data-actions'

import './directory.scss';
// ({ sections, loadHomepageData })
class Directory extends Component {
  componentDidMount() {
    this.props.loadHomepageData()
  }

  render() {
    const { sections } = this.props
    console.log('sections',sections)
    return (
      <div className='directory-menu'>
        {
          sections && sections.length ? sections.map(({ id, ...otherProps }) => (
            <MenuItem key={id} {...otherProps} />
          )) : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sections: selectDirectory(state)
})

const mapDispatchToProps = dispatch => ({
  loadHomepageData: () => dispatch(loadHomepageData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Directory);