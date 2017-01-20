import React from 'react'

const style = {
	display: 'flex',
	borderBottom: '1px solid #000',
}


const TabGroup = ({
	children
}) => {
	return(
		<div style={style}>
			{children}
		</div>
	)
}

export default TabGroup