import React, { useContext } from 'react'
import { AppContext } from '../containers/AppContext'

const TotalBalance = () => {
	const { entries } = useContext(AppContext)
	console.log(entries)

	return (
		<header className="mb-5">
			<h1 className="display-4 text-center">$100</h1>
		</header>
	)
}

export default TotalBalance
