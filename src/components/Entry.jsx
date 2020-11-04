import React, { useContext } from 'react'
import { AppContext } from '../containers/AppContext'
import './Entry.css'

const Entry = ({ id, description, amount }) => {
	const { handleDelete } = useContext(AppContext)

	return (
		<>
			<li
				className={`entry-item mt-2 list-group-item list-group-item-action list-group-item-${
					amount >= 0 ? 'success' : 'danger'
				}`}
			>
				{description}
				<button onClick={() => handleDelete(id)} className="close-button close">
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
