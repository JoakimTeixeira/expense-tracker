import React from 'react'
import Entry from './Entry'

const Entries = () => {
	return (
		<section className="mb-3">
			<h5 className="display-6">Entries</h5>
			<hr />

			<article className="list-group">
				<Entry />
				<Entry />
				<Entry />
				<Entry />
			</article>
		</section>
	)
}

export default Entries
