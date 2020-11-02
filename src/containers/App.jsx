import React from 'react'
import Summary from '../components/Summary'
import TotalBalance from '../components/TotalBalance'

const App = () => {
	return (
		<div className="container p-5">
			<TotalBalance />
			<Summary />
		</div>
	)
}

export default App
