import React from 'react'
import '../styles/tabs.css'

const Tabs = ({
	children
}) => {
	return(
		<div styleName="tabs">
			{children}
		</div>
	)
}

export default Tabs
