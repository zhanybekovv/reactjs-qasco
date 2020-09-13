import React, { useEffect, useState } from 'react';
import { Layout } from './Layout';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

export const Employee = () => {
	const [ data, setData ] = useState();
    const history = useHistory()
	const getData = async () => {
		try {
			const result = await axios.get('http://dummy.restapiexample.com/api/v1/employees');

			setData(result.data.data);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		getData();
	}, []);
	console.log(data);
	return (
		<Layout>
			<div className="h1">Employees</div>
			{/* <div className="d-flex flex-wrap justify-content-between">
				{data &&
					data.map((user) => (
						<UserCard
							name={user.employee_name}
							salary={user.employee_salary}
							age={user.employee_age}
							key={user.id}
						/>
					))}
			</div> */}
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Name</th>
						<th scope="col">Age</th>
						<th scope="col">Salary</th>
                        <th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					{data &&
						data.map((user, index) => (
							<tr key={index} onClick={()=>history.push(`/employee/${user.id}`)} style={{cursor: "pointer"}}>
								<th scope="row">{user.id}</th>
								<td>{user.employee_name}</td>
								<td>{user.employee_age}</td>
								<td>{user.employee_salary}</td>
								<td>
									<ul className="list-inline m-0">
										<li className="list-inline-item">
											<button
												className="btn btn-success btn-sm rounded-0"
												type="button"
												data-toggle="tooltip"
												data-placement="top"
												title="Edit"
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
