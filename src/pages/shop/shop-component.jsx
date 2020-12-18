import React, { Component } from 'react'
import { connect } from 'react-redux'
import CollectionOverview from '../../components/collection-overview/collection-overview-component'
import CategoryPage from '../category/category-component'
import {createStructuredSelector} from 'reselect'
import { fetchCollectionStart } from '../../redux/shop/shop-actions'
import Loader from '../../components/loader/loader-component'
import {selectIsFetching, selectIsCollectionsLoaded} from '../../redux/selectors'

import { Route } from 'react-router-dom'

 const CollectionOverviewWithLoader = Loader(CollectionOverview)
 const CategoryPageWithLoader = Loader(CategoryPage)
class ShopPage extends Component {

    componentDidMount = () => {
        const { fetchCollectionStart } = this.props
        fetchCollectionStart()
    }

    render() {
        const { match, isFetching, isCollectionsLoaded } = this.props
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => (
                    <CollectionOverviewWithLoader isLoading={isFetching} {...this.props} {...props} />
                )} />
                <Route path={`${match.path}/:collectionName`} render={(props) => (
                    <CategoryPageWithLoader isLoading={!isCollectionsLoaded} {...this.props} {...props}/>
                )} />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isFetching : selectIsFetching,
    isCollectionsLoaded : selectIsCollectionsLoaded
})

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionStart: (data) => dispatch(fetchCollectionStart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
