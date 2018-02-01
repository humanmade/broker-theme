import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { createApp } from './actions';
import NotFound from './NotFound';
import AppSettings from './App/AppSettings';
import DisplaySettings from './App/DisplaySettings';

import './AppCreate.css';

class AppCreate extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			created: null,
			error: null,
			saving: false,
		};
	}

	onSave( data ) {
		this.setState( {
			error: null,
			saving: true,
		} );

		this.props.onSave( data )
			.then( id => {
				this.setState( {
					created: id,
				} );
			} )
			.catch( error => {
				this.setState( {
					error,
					saving: false,
				} );
			} );
	}

	render() {
		const { created, error, saving } = this.state;

		if ( created ) {
			return <Redirect
				to={ `/apps/${ created }/edit/` }
			/>;
		}

		return <article className="AppCreate">
			<h1>Create a new app</h1>
			<p>We need some basic information about your app. You'll be able to edit this later.</p>
			<AppSettings
				app={ null }
				error={ error }
				saving={ saving }
				user={ this.props.user }
				onSave={ data => this.onSave( data ) }
			/>
		</article>;
	}
}

const mapStateToProps = state => {
	return {
		user: state.user,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		onSave: data => dispatch( createApp( data ) ),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)( AppCreate );
