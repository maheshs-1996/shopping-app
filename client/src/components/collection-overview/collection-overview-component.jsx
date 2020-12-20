import React from 'react'
import CollectionPreview from '../collection-preview/collection-preview'

import {createStructuredSelector} from 'reselect'

import {connect} from 'react-redux'
import {selectCollections} from '../../redux/selectors'

const CollectionOverview = ({ collections }) =>  {
    return (
        <div className='collection-overview'>
            {
                collections.map(({ id, ...otherProps }) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections : selectCollections
  })


export default connect(mapStateToProps)(CollectionOverview)