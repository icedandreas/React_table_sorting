import React from 'react'

export default function TestpersonTable(props) {
	return (
		<table>
			<thead>			
				<tr>
				<th>
					<button
						onClick={() => props.sortBy('id')}
					>
					ID
					</button>
				</th>
				<th>
					<button
						onClick={() => props.sortBy('name')}
					>
					Name
					</button>
				</th>
				<th>
					<button
						onClick={() => props.sortBy('gender')}
					>
					Gender
					</button>
				</th>
				<th>
					<button
						onClick={() => props.sortBy('company')}
					>
					Company
					</button>
				</th>
				<th>
					<button
						onClick={() => props.sortBy('email')}
					>
					Email
					</button>
				</th>
				<th>
					<button
						onClick={() => props.sortBy('isActive')}
					>
					IsActive
					</button>
				</th>
				<th>
					Picture
				</th>
				</tr>
			</thead>
			<tbody>
				{
					props.data.map(row => (
						<tr>
							<td>{row.id}</td>
							<td>{row.name}</td>
							<td>{row.gender}</td>
							<td>{row.company}</td>
							<td>{row.email}</td>
							<td>{String(row.isActive)}</td>
							<td>{<img src={row.picture}/>}</td>
						</tr>
					))
				}
			</tbody>
		</table>
	)
}