import React from 'react'
import '../styles/tabs.css'

const TabGroup = ({
	children
}) => {
	return(
		<div styleName="tabgroup">
			{children}
		</div>
	)
}

export default TabGroup