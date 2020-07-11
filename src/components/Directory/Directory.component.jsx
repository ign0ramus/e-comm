import React, { Component } from 'react';
import MenuItem from '../MenuItem/MenuItem.component';
import './Directory.styles.scss';

import SECTIONS from '../../mock/directory.data';
class Directory extends Component {
	state = {
		sections: SECTIONS,
	};

	render() {
		const { sections } = this.state;
		return (
			<div className='directory-menu'>
				{sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}

export default Directory;
