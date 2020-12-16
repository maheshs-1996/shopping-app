import React, { Component } from 'react'
import { connect } from 'react-redux'
import CollectionOverview from '../../components/collection-overview/collection-overview-component'
import CategoryPage from '../category/category-component'
import { updateShopData } from '../../redux/shop/shop-actions'

import { Route } from 'react-router-dom'
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';

 
class ShopPage extends Component {
    unsubscribeFromSnapshot = null;

    componentDidMount = () => {
        const collectionRef = firestore.collection('collections')

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            let collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            this.props.updateShopData(collectionsMap)
        })
    }

    render() {
        const { match } = this.props
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionName`} component={CategoryPage} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateShopData: (data) => dispatch(updateShopData(data))
})

export default connect(null, mapDispatchToProps)(ShopPage)
