import React from 'react'
import './Entry.css'

const Entry = ({ description, amount }) => {
	return (
		<>
			<li
				className={`entry-item mt-2 list-group-item list-group-item-action list-group-item-${
					amount >= 0 ? 'success' : 'danger'
				}`}
			>
				{description}
				<button className="close-button close">
					<span aria-hidden="true">&times;</span>
				</button>
				<span className="float-right">
					{amount > 0 && '+'}
					{amount}
				</span>
			</li>
		</>
	)
}

export default Entry
