import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from './AppContext'

const Form = () => {
	const [description, setDescription] = useState('')
	const [amount, setAmount] = useState('')
	const { addEntry } = useContext(AppContext)
	const inputFocus = useRef('')

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

	useEffect(() => {
		inputFocus.current.focus()
	}, [addEntry])

	return (
		<section className="border border-info p-4 mb-4">
			<form>
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<input
						onChange={handleDescriptionInput}
						type="text"
						id="description"
						className="form-control"
						value={description}
						ref={inputFocus}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="amount">Amount</label>
					<input
						onChange={(event) => handleAmountInput(event)}
						type="number"
						id="amount"
						className="form-control"
						value={amount}
					/>
				</div>

				<button onClick={handleSubmit} type="submit" className="btn btn-info">
					ADD ENTRY
				</button>
			</form>
		</section>
	)
}

export default Form
