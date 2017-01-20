'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
	display: 'flex',
	borderBottom: '1px solid #000'
};

var TabGroup = function TabGroup(_ref) {
	var children = _ref.children;

	return _react2.default.createElement(
		'div',
		{ style: style },
		children
	);
};

exports.default = TabGroup;
module.exports = exports['default'];