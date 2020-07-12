export const addItemToCart = (cartItems, itemToAdd) => {
	const isExist = cartItems.some((item) => item.id === itemToAdd.id);

	if (isExist) {
		return cartItems.map((item) =>
			item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
		);
	}

	return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
