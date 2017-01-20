import React from 'react'

// Components
import { Link } from 'react-router'

// Styles
const styles = {
	tab: {
		border: '1px solid #000',
		marginRight: '2px',
		position: 'relative',
		top: '1px',
		borderBottom: 0,
	},
	link: {
		padding: '10px 15px',
		display: 'block',
		color: '#fff',
		backgroundColor: '#0097A7',
		textDecoration: 'none',
		borderBottom: '1px solid #000',
	},
	link_hover: {
		backgroundColor: '006064',
	},
	link_active: {
		backgroundColor: '#4DD0E1',
		borderBottom: '1px solid #4DD0',
	},
	link_active_hover: {
		backgroundColor: '#4DD0E1',
	},
}

const Tab = ({
	children,
	href,
}) => {
	return(
		<div style={styles.tab}>
			<Link 
				activeClassName="tab-active"
				onlyActiveOnIndex={true}
				to={href}
			>
				{children}
			</Link>
		</div>
	)
}

export default Tab