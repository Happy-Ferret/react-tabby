import React from 'react'

const defaultStyles = {
	padding: '15px 10px',
	border: '1px solid #000',
	borderTop: 0,
}

const TabContent = ({
	children,
	style,
	borderColor,
	backgroundColor
}) => {

	let styles = Object.assign(
		{}, 
		defaultStyles, 
		style,
		borderColor && { borderColor },
		backgroundColor && { backgroundColor }
	)

	return(
		<div style={styles}>
			{children}
		</div>
	)
}

export default TabContent