import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';
import CollectionPreview from '../CollectionPreview/CollectionPreview.component';
import './CollectionsOverview.styles.scss';

const CollectionsOverview = ({ collections }) => (
	<div className='overview'>
		{collections.map(({ id, title, items }) => (
			<CollectionPreview key={id} title={title} items={items} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
