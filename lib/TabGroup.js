'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStyles = {
	display: 'flex',
	borderBottom: '1px solid #000'
};

var TabGroup = function TabGroup(_ref) {
	var children = _ref.children,
	    style = _ref.style,
	    borderColor = _ref.borderColor,
	    hoverStyle = _ref.hoverStyle;


	var styles = Object.assign({}, defaultStyles, style, borderColor && { borderColor: borderColor });

	var injectedChildren = children.map(function (child, i) {
		return _react2.default.cloneElement(child, {
			key: i,
			borderColor: borderColor,
			hoverStyle: hoverStyle
		});
	});

	return _react2.default.createElement(
		'div',
		{ style: styles },
		injectedChildren
	);
};

exports.default = TabGroup;
module.exports = exports['default'];