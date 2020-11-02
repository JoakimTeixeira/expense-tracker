import React from 'react'

const Form = () => {
	return (
		<section className="border border-info p-4 mb-3">
			<form>
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<input type="text" id="description" className="form-control" />
				</div>

				<div className="form-group">
					<label htmlFor="amount">Amount</label>
					<input type="number" id="amount" className="form-control" />
				</div>

				<button type="submit" className="btn btn-info">
					ADD ENTRY
				</button>
			</form>
		</section>
	)
}

export default Form
