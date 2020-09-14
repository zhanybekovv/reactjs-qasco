import React, {useEffect, useState} from 'react';
import Photo from './assets/img/unknown.jpeg';
import { Layout } from './Layout';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export const UserCardEdit = (props) => {
  const [userData, setUserData] = useState({})
	const history = useHistory();
	const id = history.location.pathname.split('/')[2];
  const getData = async () => {
		try {
      const result = await axios.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`).then(response => response.data.data);
      setUserData(result)
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<Layout>
			<div className="card" style={{ width: '15rem', cursor: 'pointer' }} onClick={() => console.log('Nrtay')}>
				<img className="card-img-top" src={Photo} alt="Card image cap" height="120px" onClick={()=>props.action(id)} />
				<div className="card-body">
					<div className="d-flex">Name: {userData && userData.employee_name}</div>
					<div className="d-flex">Salary: {userData && userData.employee_salary}</div>
					<div className="d-flex">Age: {userData && userData.employee_age}</div>
				</div>
			</div>
		</Layout>
	);
};


