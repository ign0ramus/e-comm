import {
	TOGGLE_CART_HIDDEN,
	ADD_ITEM_TO_CART,
	CLEAR_ITEM_FROM_CART,
	REMOVE_ITEM_FROM_CART,
} from './cartTypes';
import { addItemToCart, removeItemFromCart } from './cartUtils';

const INITIAL_STATE = {
	hidden: true,
	items: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TOGGLE_CART_HIDDEN:
			return { ...state, hidden: !state.hidden };
		case ADD_ITEM_TO_CART:
			return { ...state, items: addItemToCart(state.items, action.payload) };
		case CLEAR_ITEM_FROM_CART:
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload.id),
			};
		case REMOVE_ITEM_FROM_CART:
			return {
				...state,
				items: removeItemFromCart(state.items, action.payload),
			};
		default:
			return state;
	}
};

export default cartReducer;
