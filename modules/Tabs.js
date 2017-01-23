import React from 'react'

const style = {
	fontFamily: 'sans-serif',
	WebkitFontSmoothing: 'antialiased',
	color: '#fff',
}

const Tabs = ({
	children,
	borderColor,
	backgroundColor,
}) => {
	const injectedChildren = []

	children.map((child, i) => {
		injectedChildren.push(React.cloneElement(child, {
			key: i,
			borderColor,
			backgroundColor,
		}))
	})

	return(
		<div style={style}>
			{injectedChildren}
		</div>
	)
}

export default Tabs
