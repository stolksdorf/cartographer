var React = require('react');
var _     = require('lodash');
var cx    = require('classnames');

var Nav = require('naturalcrit/nav/nav.jsx');
var Navbar = require('./navbar/navbar.jsx');

var Cartographer = React.createClass({

	getDefaultProps: function() {
		return {
			url : '',
			version : 'v0.0.0'
		};
	},


	renderNavbar : function(){
		return <Navbar ver={this.props.version}>
			<Nav.section>
				Cartographer
			</Nav.section>
		</Navbar>
	},

	render : function(){
		return <div className='cartographer page'>
			{this.renderNavbar()}

			<div className='content'>
				WELL MET
			</div>
		</div>
	}
});

module.exports = Cartographer;
