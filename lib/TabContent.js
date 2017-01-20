'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
	padding: '15px 10px',
	backgroundColor: '#4DD0E1',
	border: '1px solid #000',
	borderTop: 0
};

var TabContent = function TabContent(_ref) {
	var children = _ref.children;

	return _react2.default.createElement(
		'div',
		{ style: styles },
		children
	);
};

exports.default = TabContent;
module.exports = exports['default'];