import React from 'react'

// Components
import Tabs from './Tabs'
import TabGroup from './TabGroup'
import Tab from './Tab'
import TabContent from './TabContent'

const Main = ({
	children
}) => {
	return(
		<Tabs>
			<TabGroup>
				<Tab href="/">Example Tab 1</Tab>
				<Tab href="example2">Example Tab 2</Tab>
			</TabGroup>
			<TabContent>
				{children}
			</TabContent>
		</Tabs>
	)
}

export default Main