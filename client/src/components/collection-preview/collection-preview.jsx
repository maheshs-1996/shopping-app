import React from 'react'
import './collection-preview.scss'

import CollectionItem from '../collection-item/collection-item';
import {withRouter} from 'react-router-dom'

const CollectionPreview = (props) => {
    const { title, items, routeName,history,match  } = props
    return (
        <div className="collection-preview">
            <h1 className="title" onClick={() => history.push(`${match.url}/${routeName}`)}>{title}</h1>
            <div className="preview">
                {
                    items
                        .filter((i, ind) => ind < 4)
                        .map((item) => (
                            <CollectionItem key={item.id} item={item} />
                        ))
                }
            </div>
        </div>
    )
}

export default withRouter(CollectionPreview);
