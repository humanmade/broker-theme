import React from 'react';

import AppGrid from './AppGrid';
import AppGridBonus from './AppGridBonus';
import Link from './Link';
import NotFound from './NotFound';
import withArchive from './lib/withArchive';

const MyApps = props => {
	const { loading, posts } = props;

	if ( loading ) {
		return <div><h2>Loading…</h2></div>;
	}

	if ( ! posts ) {
		return <NotFound />;
	}

	return <div className="MyApps">
		<h2>My Apps</h2>
		{ posts.length ?
			<AppGrid apps={ posts } />
		:
			<p>No apps found.</p>
		}
		<AppGridBonus><Link href="/apps/new/">Create new app</Link></AppGridBonus>
	</div>;
};

export default withArchive( 'apps/mine' )( MyApps );
