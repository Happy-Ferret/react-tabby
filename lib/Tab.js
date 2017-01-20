'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Styles
var styles = {
	tab: {
		border: '1px solid #000',
		marginRight: '2px',
		position: 'relative',
		top: '1px',
		borderBottom: 0
	},
	link: {
		padding: '10px 15px',
		display: 'block',
		color: '#fff',
		backgroundColor: '#0097A7',
		textDecoration: 'none',
		borderBottom: '1px solid #000'
	},
	link_hover: {
		backgroundColor: '006064'
	},
	link_active: {
		backgroundColor: '#4DD0E1',
		borderBottom: '1px solid #4DD0'
	},
	link_active_hover: {
		backgroundColor: '#4DD0E1'
	}
};

// Components


var Tab = function Tab(_ref) {
	var children = _ref.children,
	    href = _ref.href;

	return _react2.default.createElement(
		'div',
		{ style: styles.tab },
		_react2.default.createElement(
			_reactRouter.Link,
			{
				activeClassName: 'tab-active',
				onlyActiveOnIndex: true,
				to: href
			},
			children
		)
	);
};

exports.default = Tab;
module.exports = exports['default'];