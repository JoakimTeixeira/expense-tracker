import React from 'react'
import Entries from '../components/Entries'
import Form from '../components/Form'
import Summary from '../components/Summary'
import TotalBalance from '../components/TotalBalance'
import { AppContextProvider } from './AppContext'

const App = () => {
	return (
		<AppContextProvider>
			<div className="container p-5">
				<TotalBalance />
				<Summary />
				<Form />
				<Entries />
			</div>
		</AppContextProvider>
	)
}

export default App
