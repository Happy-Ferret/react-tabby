import React from 'react'

const defaultStyles = {
	display: 'flex',
	borderBottom: '1px solid #000',
}


const TabGroup = ({
	children,
	style,
	borderColor,
	hoverStyle,
}) => {
	
	const styles = Object.assign(
		{}, 
		defaultStyles, 
		style,
		borderColor && { borderColor }
	)

	const injectedChildren = children.map((child, i) => {
		return React.cloneElement(child, {
			key: i,
			borderColor,
			hoverStyle,
		})
	})

	return(
		<div style={styles}>
			{injectedChildren}
		</div>
	)
}

export default TabGroup