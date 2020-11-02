import React from 'react'

const Summary = () => {
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
							+150
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
							-50
						</h6>
					</div>
				</div>
			</article>
		</section>
	)
}

export default Summary
