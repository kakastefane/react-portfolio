import React from 'react';
import { Link } from 'react-router-dom';

function NavMenu() {
	return(
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
			<li><Link to="/portfolio">Portfolio</Link></li>
			<li><Link to="/contact">Contact</Link></li>
		</ul>
	);
}

export default NavMenu;
