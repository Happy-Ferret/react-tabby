'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Components


var Tab = function (_React$Component) {
	_inherits(Tab, _React$Component);

	function Tab(props) {
		_classCallCheck(this, Tab);

		return _possibleConstructorReturn(this, _React$Component.call(this, props));
	}

	Tab.prototype.render = function render() {
		var _props = this.props,
		    children = _props.children,
		    href = _props.href,
		    style = _props.style,
		    borderColor = _props.borderColor,
		    hoverStyle = _props.hoverStyle;

		// Styles

		var styles = {

			tab: {
				marginRight: '2px',
				backgroundColor: '#0097A7',
				borderWidth: '1px',
				borderStyle: 'solid',
				borderColor: '#000',
				borderBottom: '0',

				':hover': Object.assign({}, { backgroundColor: 'red' }, hoverStyle)
			},

			link: {
				padding: '10px 15px',
				display: 'block',
				color: '#fff',
				textDecoration: 'none',

				active: {
					backgroundColor: '#4DD0E1'
				}
			}

		};

		return _react2.default.createElement(
			'div',
			{ style: styles.tab },
			_react2.default.createElement(
				_reactRouter.Link,
				{
					activeClassName: 'tab-active',
					onlyActiveOnIndex: true,
					to: href,
					style: styles.link,
					activeStyle: styles.link.active
				},
				children
			)
		);
	};

	return Tab;
}(_react2.default.Component);

//activeStyle={styles.link_active}

// const Tab = ({

// }) => {

// 	// defaultStyles.tab = Object.assign(
// 	// 	{}, 
// 	// 	defaultStyles.tab,
// 	// 	borderColor && { borderColor }
// 	// )

// 	// const styles = Object.assign(
// 	// 	{},
// 	// 	defaultStyles,
// 	// 	style
// 	// )

// 	return(

// 	)
// }

exports.default = (0, _radium2.default)(Tab);
module.exports = exports['default'];