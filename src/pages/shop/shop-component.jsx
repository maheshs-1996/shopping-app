import React, { Component } from 'react'
import { connect } from 'react-redux'
import CollectionOverview from '../../components/collection-overview/collection-overview-component'
import CategoryPage from '../category/category-component'
import { updateShopData } from '../../redux/shop/shop-actions'
import Loader from '../../components/loader/loader-component'

import { Route } from 'react-router-dom'
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';

 const CollectionOverviewWithLoader = Loader(CollectionOverview)
 const CategoryPageWithLoader = Loader(CategoryPage)
class ShopPage extends Component {
    unsubscribeFromSnapshot = null;
    state = {
        isLoading : true
    }

    componentDidMount = () => {
        const collectionRef = firestore.collection('collections')

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            let collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            this.props.updateShopData(collectionsMap)
            this.setState({isLoading : false})
        })
    }

    render() {
        const { match } = this.props
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => (
                    <CollectionOverviewWithLoader isLoading={this.state.isLoading} {...this.props} {...props} />
                )} />
                <Route path={`${match.path}/:collectionName`} render={(props) => (
                    <CategoryPageWithLoader isLoading={this.state.isLoading} {...this.props} {...props}/>
                )} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateShopData: (data) => dispatch(updateShopData(data))
})

export default connect(null, mapDispatchToProps)(ShopPage)
