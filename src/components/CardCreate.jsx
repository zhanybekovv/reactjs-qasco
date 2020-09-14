import React, { useState } from 'react';
import Photo from '../assets/img/unknown.jpeg';
import Layout  from './Layout';
import axios from 'axios';

export const CardCreate = (props) => {
	const [ userData, setUserData ] = useState({"employee_name": "", "employee_age": "", "employee_salary": ""});

    console.log(userData)
	const sendData = async () => {
		try {
			const proxyurl = "https://cors-anywhere.herokuapp.com/";
			const url = "http://dummy.restapiexample.com/api/v1/create";
			await axios.post(proxyurl+url, userData).then((response)=>alert(response.data.message));
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<Layout>
			<div className="card" style={{ width: '15rem', cursor: 'pointer' }}>
				<img
					className="card-img-top"
					src={Photo}
					alt="unknown"
					height="120px"
				/>
				<div className="d-flex flex-column input-group input-group-sm mb-3">
					<input
						type="text"
						className="form-control w-100"
						aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
						placeholder="Name"
						required
						onChange={(event)=>setUserData({...userData, "employee_name": event.target.value})}
					/>
					<input
						type="text"
						className="form-control w-100"
						aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
						placeholder="Salary"
						required
						onChange={(event)=>setUserData({...userData, "employee_salary": event.target.value})}

					/>
					<input
						type="text"
						className="form-control w-100"
						aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
						placeholder="Age"
						required
						onChange={(event)=>setUserData({...userData, "employee_age": event.target.value})}
					/>
				</div>
			</div>
			<button onClick={()=>sendData()}>Create</button>
		</Layout>
	);
};
