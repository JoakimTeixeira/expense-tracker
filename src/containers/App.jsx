import React from 'react'
import Entries from '../components/Entries'
import Form from '../components/Form'
import Summary from '../components/Summary'
import TotalBalance from '../components/TotalBalance'

const App = () => {
	return (
		<div className="container p-5">
			<TotalBalance />
			<Summary />
			<Form />
			<Entries />
		</div>
	)
}

export default App
