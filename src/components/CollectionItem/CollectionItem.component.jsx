import React from 'react';
import { connect } from 'react-redux';

import Button from '../Button/Button.component';
import { addItemToCart } from '../../redux/cart/cartActions.js';
import './CollectionItem.styles.scss';

const CollectionItem = ({ item, addItemToCart }) => {
	const { imageUrl, name, price } = item;

	return (
		<div className='collection-item'>
			<div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<Button onClick={() => addItemToCart(item)} inverted>
				ADD TO CART
			</Button>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
