import React, { useContext } from 'react'
import { AppContext } from '../containers/AppContext'

const Form = () => {
	const {
		description,
		amount,
		inputFocus,
		handleSubmit,
		handleDescriptionInput,
		handleAmountInput,
	} = useContext(AppContext)

	return (
		<section className="border border-info p-4 mb-4">
			<form>
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<input
						onChange={(event) => handleDescriptionInput(event)}
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
