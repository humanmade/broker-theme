import React from 'react';

import './Logo.css';

export default props => <svg
	className={ props.light ? "Logo light" : "Logo" }
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 20 20"
>
	<rect x="0" fill="none" width="20" height="20" />
	<g>
		<path d="M4 15h12v2H4z" />
		<path d="M4.414 17.414L3 16 16.293 2.293l1.414 1.414" />
		<path d="M3 4h2v12H3z" />
		<circle cx="5" cy="15" r="4" />
		<ellipse cx="16.5" cy="3.479" rx="2.5" ry="2.521" />
		<circle cx="15.986" cy="15.986" r="2.986" />
		<circle cx="4" cy="4" r="3" />
	</g>
</svg>;