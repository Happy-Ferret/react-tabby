import React from 'react'

const styles = {
	padding: '15px 10px',
	backgroundColor: '#4DD0E1',
	border: '1px solid #000',
	borderTop: 0,
}

const TabContent = ({
	children
}) => {
	return(
		<div style={styles}>
			{children}
		</div>
	)
}

export default TabContent