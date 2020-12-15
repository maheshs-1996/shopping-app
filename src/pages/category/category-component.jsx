import React from 'react'
import CollectionItem from '../../components/collection-item/collection-item'
import { selectCategoryItems } from '../../redux/selectors'

import './category.scss'

import { connect } from 'react-redux'

const CategoryPage = ({ categoryItems }) => {
    if(categoryItems){
        const { title, items } = categoryItems
        return (
            <div className="category">
                <h1>{title}</h1>
                <div className="category-items">
                    {
                        items.map((item) => (
                            <CollectionItem key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        )
    }
    return null
}

const mapStateToProps = (state, ownProps) => ({
    categoryItems: selectCategoryItems(ownProps.match.params.collectionName)(state)
})

export default connect(mapStateToProps)(CategoryPage)  
