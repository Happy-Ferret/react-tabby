import React from 'react'

const style = {
	fontFamily: 'sans-serif',
	webkitFontSmoothing: 'antialiased',
	color: '#fff',
}

const Tabs = ({
	children
}) => {
	return(
		<div style={style}>
			{children}
		</div>
	)
}

export default Tabs
