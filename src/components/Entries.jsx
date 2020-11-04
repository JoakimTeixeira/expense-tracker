import React, { useContext } from 'react'
import { AppContext } from '../containers/AppContext'
import Entry from './Entry'

const Entries = () => {
	const { entries } = useContext(AppContext)

	return (
		<section className="mb-3">
			<h5 className="display-6">Entries</h5>
			<hr />

			<article className="list-group">
				{entries &&
					entries.map((entry) => {
						const { id, description, amount } = entry

						return (
							<Entry
								key={id}
								id={id}
								description={description}
								amount={amount}
							/>
						)
					})}
			</article>
		</section>
	)
}

export default Entries
