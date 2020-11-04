import React, { useState, createContext } from 'react'

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
	const [entries, setEntries] = useState([
		{ id: 1, description: 'Pizza', amount: -20 },
		{ id: 2, description: 'Salary', amount: 100 },
		{ id: 3, description: 'Uber', amount: -15 },
		{ id: 4, description: 'Book', amount: -25 },
	])

	return (
		<AppContext.Provider value={{ entries }}>{children}</AppContext.Provider>
	)
}