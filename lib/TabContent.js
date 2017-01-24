'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStyles = {
	padding: '15px 10px',
	border: '1px solid #000',
	borderTop: 0
};

var TabContent = function TabContent(_ref) {
	var children = _ref.children,
	    style = _ref.style,
	    borderColor = _ref.borderColor,
	    backgroundColor = _ref.backgroundColor;


	var styles = Object.assign({}, defaultStyles, style, borderColor && { borderColor: borderColor }, backgroundColor && { backgroundColor: backgroundColor });

	return _react2.default.createElement(
		'div',
		{ style: styles },
		children
	);
};

exports.default = TabContent;
module.exports = exports['default'];