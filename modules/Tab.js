import React from 'react'
import Radium from 'radium'

// Components
import { Link } from 'react-router'

class Tab extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		const {
			children,
			href,
			style,
			borderColor,
			hoverStyle,
		} = this.props

		// Styles
		const styles = {

			tab: {
				marginRight: '2px',
				backgroundColor: '#0097A7',
				borderWidth: '1px',
				borderStyle: 'solid',
				borderColor: '#000',
				borderBottom: '0',

				':hover': Object.assign(
					{},
					{ backgroundColor: 'red', },
					hoverStyle,
				)
			},

			link: {
				padding: '10px 15px',
				display: 'block',
				color: '#fff',
				textDecoration: 'none',

				active: {
					backgroundColor: '#4DD0E1',
				}
			},

		}

		return(
			<div style={styles.tab}>
				<Link 
					activeClassName="tab-active"
					onlyActiveOnIndex={true}
					to={href}
					style={styles.link}
					activeStyle={styles.link.active}
				>
					{children}
				</Link>
			</div>
		)
	}

}

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

export default Radium(Tab)