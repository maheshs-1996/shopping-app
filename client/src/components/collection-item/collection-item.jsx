import React from 'react';
import { connect } from 'react-redux';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  CartButton
} from './collection-item-styles';

import { addItem } from '../../redux/cart/cart-actions';
import PlusAndMinusComponent from '../plus-and-minus/plus-and-minus_component'

const CollectionItem = (props) => {
  const { item, addItem } = props
  const { name, price, imageUrl, quantity } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <CartButton>
        <AddButton onClick={() => addItem(item)} inverted> Add to cart</AddButton>
        <PlusAndMinusComponent {...props} cartItem={item} cartCard />
      </CartButton>
    </CollectionItemContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem)
