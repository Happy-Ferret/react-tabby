import React from 'react'

// Components
import { Link } from 'react-router'

// Styles
import '../styles/tabs.css'

const Tab = ({
	children,
	href,
}) => {
	return(
		<div styleName="tab">
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