import React from 'react'
import CollectionOverview from '../../components/collection-overview/collection-overview-component'
import CategoryPage from '../category/category-component'

import {Route} from 'react-router-dom'

 
const ShopPage = ({match}) => {
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionName`} component={CategoryPage} />
        </div>
    )
}

export default ShopPage
