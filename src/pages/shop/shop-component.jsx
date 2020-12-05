import React, { Component } from 'react'

import SHOP_DATA from '../../assets/data/collections'
import CollectionPreview from '../../components/collection-preview/collection-preview'

export default class ShopPage extends Component {
    constructor() {
        super()
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return (
            <div className="shop-page">
                {
                    this.state.collections.map(({ id, ...otherProps}) => (
                        <CollectionPreview key={id} {...otherProps} />
                    ))
                }
            </div>
        )
    }
}
