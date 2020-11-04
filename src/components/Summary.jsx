import React, { useContext } from 'react'
import { AppContext } from '../containers/AppContext'

const Summary = () => {
	const { entries } = useContext(AppContext)

	const filterEntries = (entryType) => {
		if (entryType === 'income') {
			return entries.filter((entry) => entry.amount >= 0)
		} else if (entryType === 'expense') {
			return entries.filter((entry) => entry.amount < 0)
		}
	}

	const sumEntries = (entries) => {
		return entries.reduce((total, entry) => {
			return parseFloat(total) + parseFloat(entry.amount)
		}, 0)
	}

	const totalIncome = () => {
		return sumEntries(filterEntries('income'))
	}

	const totalExpense = () => {
		return sumEntries(filterEntries('expense'))
	}

	return (
		<section className="row mb-3">
			<article className="col-sm-6 mb-3">
				<div className="card border-success">
					<div className="card-body">
						<h5 className="card-title text-center mb-3">Income</h5>
						<h6
							className="card-text text-center text-success"
							style={{ fontSize: '1.5rem' }}
						>
							{totalIncome()}
						</h6>
					</div>
				</div>
			</article>

			<article className="col-sm-6">
				<div className="card border-danger">
					<div className="card-body">
						<h5 className="card-title text-center mb-3">Expense</h5>
						<h6
							className="card-text text-center text-danger"
							style={{ fontSize: '1.5rem' }}
						>
							{totalExpense()}
						</h6>
					</div>
				</div>
			</article>
		</section>
	)
}

export default Summary
