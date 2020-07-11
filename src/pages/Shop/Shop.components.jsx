import React, { Component } from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.component';

import COLLECTIONS from '../../mock/shop.data';
class Shop extends Component {
	state = {
		collections: COLLECTIONS,
	};

	render() {
		const { collections } = this.state;
		return (
			<div className='shop'>
				{collections.map(({ id, title, items }) => (
					<CollectionPreview key={id} title={title} items={items} />
				))}
			</div>
		);
	}
}

export default Shop;
