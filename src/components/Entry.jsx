import React from 'react'
import './Entry.css'

const Entry = () => {
	return (
		<>
			<li className="entry-item mt-2 list-group-item list-group-item-action list-group-item-success">
				Book purchase
				<button className="close-button close">
					<span aria-hidden="true">&times;</span>
				</button>
				<span className="float-right">+50</span>
			</li>
		</>
	)
}

export default Entry
