import { connect } from 'react-redux';

import AppDetails from '../App/Details';
import { getApp, getAppForEdit, updateApp } from '../actions';
import { apps } from '../lib/types';

const getId = props => parseInt( props.match.params.id, 10 );

const canEdit = ( user, app ) => {
	if ( ! app || ! user ) {
		return false;
	}

	if ( app.author === user ) {
		return true;
	}

	if ( 'edit_posts' in user.capabilities ) {
		return true;
	}

	return false;
};

const mapStateToProps = ( state, props ) => {
	const id = getId( props );
	const app = apps.getSingle( state.apps, id );
	// const app = state.apps.posts.find( post => post.id === id );

	return {
		action:  props.match.params.action,
		app:     app,
		canEdit: app ? canEdit( state.user, app ) : null,
		loading: state.apps.loadingSingle === id,
		saving:  state.apps.saving === id,
		user:    state.user,
	};
};

const mapDispatchToProps = ( dispatch, props ) => {
	const id = getId( props );

	return {
		onLoad:        () => dispatch( getApp( id ) ),
		onLoadForEdit: () => dispatch( getAppForEdit( id ) ),
		onSave:        data => dispatch( updateApp( data ) ),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)( AppDetails );
