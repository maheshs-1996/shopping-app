import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import CollectionOverview from '../../components/collection-overview/collection-overview-component'
import CategoryPage from '../category/category-component'
import { createStructuredSelector } from 'reselect'
import { fetchCollectionStart } from '../../redux/shop/shop-actions'
import Loader from '../../components/loader/loader-component'
import { selectIsFetching, selectIsCollectionsLoaded } from '../../redux/selectors'

import { Route } from 'react-router-dom'

const CollectionOverviewWithLoader = Loader(CollectionOverview)
const CategoryPageWithLoader = Loader(CategoryPage)

const ShopPage = ({fetchCollectionStart,match,isFetching,isCollectionsLoaded}) => {

    useEffect(() => {
        fetchCollectionStart()
    },[fetchCollectionStart])

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props) => (
                <CollectionOverviewWithLoader isLoading={isFetching} {...props} />
            )} />
            <Route path={`${match.path}/:collectionName`} render={(props) => (
                <CategoryPageWithLoader isLoading={!isCollectionsLoaded} {...props} />
            )} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
