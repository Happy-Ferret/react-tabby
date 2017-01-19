import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Components
import Main from './components/Main'

const ExampleOne = () => <div>Example One</div>
const ExampleTwo = () => <div>Example Two</div>

const routes = (
	<Route path="/" component={Main}>
		<IndexRoute component={ExampleOne} />
		<Route path="example2" component={ExampleTwo} />
	</Route>
)

export { routes }