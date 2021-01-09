import React, { Component } from 'react';

import MenuItem from '../menu-item/menu-item-component';
import { connect } from 'react-redux'
import { selectDirectory, selectIsFetchingHomepageData } from '../../redux/selectors'
import { loadHomepageData } from '../../redux/data/data-actions'

import './directory.scss';
import Loader from '../loader/loader-component'

const DirectoryComponent = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {
        sections && sections.length ? sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        )) : null
      }
    </div>
  )
}

const DirectoryComponentWithLoader = Loader(DirectoryComponent)

class Directory extends Component {
  componentDidMount() {
    this.props.loadHomepageData()
  }

  render() {
    const { props } = this
    console.log("props.isFetching",props.isFetching)
    return (
      <DirectoryComponentWithLoader isLoading={props.isFetching} {...props} />
    );
  }
}

const mapStateToProps = state => ({
  sections: selectDirectory(state),
  isFetching: selectIsFetchingHomepageData(state)
})

const mapDispatchToProps = dispatch => ({
  loadHomepageData: () => dispatch(loadHomepageData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Directory);