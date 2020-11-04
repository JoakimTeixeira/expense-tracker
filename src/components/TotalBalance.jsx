import React, { useContext } from 'react'
import { AppContext } from '../containers/AppContext'

const TotalBalance = () => {
	const { entries } = useContext(AppContext)
	const sum = entries.reduce((total, entry) => {
		return parseFloat(total) + parseFloat(entry.amount)
	}, 0)

	return (
		<header className="mb-5">
			<h1 className="display-4 text-center">${sum}</h1>
		</header>
	)
}

export default TotalBalance
