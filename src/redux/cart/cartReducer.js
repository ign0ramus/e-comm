import { TOGGLE_CART_HIDDEN, ADD_ITEM_TO_CART } from './cartTypes';
import { addItemToCart } from './cartUtils';

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
		default:
			return state;
	}
};

export default cartReducer;
