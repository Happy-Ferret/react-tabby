'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
	fontFamily: 'sans-serif',
	WebkitFontSmoothing: 'antialiased',
	color: '#fff'
};

var Tabs = function Tabs(_ref) {
	var children = _ref.children,
	    borderColor = _ref.borderColor,
	    backgroundColor = _ref.backgroundColor;

	var injectedChildren = [];

	children.map(function (child, i) {
		injectedChildren.push(_react2.default.cloneElement(child, {
			key: i,
			borderColor: borderColor,
			backgroundColor: backgroundColor
		}));
	});

	return _react2.default.createElement(
		'div',
		{ style: style },
		injectedChildren
	);
};

exports.default = Tabs;
module.exports = exports['default'];