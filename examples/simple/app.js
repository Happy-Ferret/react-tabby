import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'
import { Tabs, TabGroup, Tab, TabContent } from 'react-tabby'

const App = ({
	children
}) => {
	return(
		<Tabs>
			<TabGroup>
				<Tab href="/simple">Example Tab 1</Tab>
				<Tab href="/simple/example2">Example Tab 2</Tab>
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
	<Route path="/simple" component={App}>
		<IndexRoute component={ExampleOne} />
		<Route path="/simple/example2" component={ExampleTwo} />
	</Route>
)

render(
	<Router history={browserHistory} routes={routes} />,
	document.getElementById('example')
)