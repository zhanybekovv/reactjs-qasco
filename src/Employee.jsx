import React, { useEffect, useState } from 'react';
import { Layout } from './Layout';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import {connect, useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {loadData} from './store/actions'

const Employee = (props) => {
	
    const history = useHistory()
	useEffect(() => {
		props.action()
	},[]);
	
	console.log("props", props.users.users);
	return (
		<Layout>
			<div className="h1" onClick={()=>props.action()}>Employees</div>
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
					{props.users.users &&
						props.users.users.map((user, index) => (
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

const mapStateToProps = (state) => {
	return {
		users: state
	};
  };
  
const mapDispatchToProps = (dispatch)=>{
	return{
		action: bindActionCreators(loadData, dispatch)
	}
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Employee);
