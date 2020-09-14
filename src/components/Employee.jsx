import React, { useEffect, useState } from 'react';
import  Layout  from './Layout';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
const Employee = (props) => {
	const history = useHistory();
	const [ usersData, setUsers ] = useState(props.users.users);	
	const search = (event) => {
		let x = usersData.filter((user) => {
			return user.employee_name.toLowerCase().includes(event.target.value.toLowerCase());
		});
		setUsers(x)
		console.log(usersData)
	};
	useEffect(()=>{
		setUsers(props.users.users)
	})

	return (
		<Layout>
			<div className="d-flex justify-content-around">
				<div className="h1">Employees</div>
				<div>
					<button
						className="btn btn-primary btn-lg rounded-0"
						type="button"
						data-toggle="tooltip"
						data-placement="top"
						title="Delete"
						onClick={() => history.push('/employee/create')}
					>
						<i className="fa fa-trash">Create</i>
					</button>
					<input
						type="text"
						aria-label="Small"
						aria-describedby="inputGroup-sizing-sm"
						placeholder="search"
						required
						onChange={(event) => search(event)}
					/>
				</div>
			</div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Name</th>
						<th scope="col">Age</th>
						<th scope="col">Salary</th>
						<th scope="col" />
					</tr>
				</thead>
				<tbody>
					{usersData &&
						usersData.map((user, index) => (
							<tr key={index}>
								<th
									scope="row"
									onClick={() => history.push(`/employee/${user.id}`)}
									style={{ cursor: 'pointer' }}
								>
									{user.id}
								</th>
								<td onClick={() => history.push(`/employee/${user.id}`)} style={{ cursor: 'pointer' }}>
									{user.employee_name}
								</td>
								<td onClick={() => history.push(`/employee/${user.id}`)} style={{ cursor: 'pointer' }}>
									{user.employee_age}
								</td>
								<td onClick={() => history.push(`/employee/${user.id}`)} style={{ cursor: 'pointer' }}>
									{user.employee_salary}
								</td>
								<td>
									<ul className="list-inline m-0">
										<li className="list-inline-item">
											<button
												className="btn btn-success btn-sm rounded-0"
												type="button"
												data-toggle="tooltip"
												data-placement="top"
												title="Edit"
												onClick={() => console.log('edit')}
											>
												<i className="fa fa-edit">Edit</i>
											</button>
										</li>
										<li className="list-inline-item">
											<button
												className="btn btn-danger btn-sm rounded-0"
												type="button"
												data-toggle="tooltip"
												data-placement="top"
												title="Delete"
												onClick={() => console.log('delete')}
											>
												<i className="fa fa-trash">Delete</i>
											</button>
										</li>
									</ul>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</Layout>
	);
};

const mapStateToProps = (state) => {
	return {
		users: state
	};
};

export default connect(mapStateToProps)(Employee);
