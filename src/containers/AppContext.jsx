import React, { useState, createContext, useRef, useEffect } from 'react'

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
	const [description, setDescription] = useState('')
	const [amount, setAmount] = useState('')
	const [entries, setEntries] = useState([
		{ id: 1, description: 'Pizza', amount: -20 },
		{ id: 2, description: 'Salary', amount: 100 },
		{ id: 3, description: 'Uber', amount: -15 },
		{ id: 4, description: 'Book', amount: -25 },
	])
	const inputFocus = useRef('')

	const addEntry = (newEntry) => {
		setEntries([...entries, newEntry])
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		if (description && amount) {
			const newEntry = {
				id: new Date().getTime(),
				description,
				amount,
			}

			addEntry(newEntry)
			setDescription('')
			setAmount('')
		}
	}

	const handleDescriptionInput = (event) => {
		setDescription(event.target.value)
	}

	const handleAmountInput = (event) => {
		setAmount(event.target.value)
	}

	const handleDelete = (id) => {
		setEntries(entries.filter((entry) => entry.id !== id))
	}

	useEffect(() => {
		inputFocus.current.focus()
	}, [entries])

	return (
		<AppContext.Provider
			value={{
				entries,
				description,
				amount,
				inputFocus,
				handleSubmit,
				handleDescriptionInput,
				handleAmountInput,
				handleDelete,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
