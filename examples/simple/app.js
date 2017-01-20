import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

// Components
import Tabs from './Tabs'
import TabGroup from './TabGroup'
import Tab from './Tab'
import TabContent from './TabContent'

const App = ({
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

const ExampleOne = () => <div>Example One</div>
const ExampleTwo = () => <div>Example Two</div>

const routes = (
	<Route path="/" component={Main}>
		<IndexRoute component={ExampleOne} />
		<Route path="example2" component={ExampleTwo} />
	</Route>
)

render(
	<Router history={browserHistory} routes={routes} />,
	document.getElementById('root')
)