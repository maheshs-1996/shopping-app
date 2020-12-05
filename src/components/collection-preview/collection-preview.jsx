import React from 'react'
import './collection-preview.scss'

import CollectionItem from '../collection-item/collection-item'

const CollectionPreview = (props) => {
    const { title, items } = props
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {
                    items
                        .filter((i, ind) => ind < 4)
                        .map(({ id, ...otherProps}) => (
                            <CollectionItem key={id} {...otherProps} />
                        ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview;
