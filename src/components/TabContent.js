import React from 'react'
import '../styles/tabs.css'

const TabContent = ({
	children
}) => {
	return(
		<div styleName="tabcontent">
			{children}
		</div>
	)
}

export default TabContent