import React from 'react';
import Photo from './assets/img/unknown.jpeg';
import {Layout} from './Layout'
//грузить с редакса, через history получать id и в редаксе искать
export const UserCard = ({ name, age, salary }) => {
	return (
    <Layout>
      <div className="card" style={{width: "15rem", cursor: "pointer"}} onClick={()=>console.log("Nrtay")}>
        <img className="card-img-top" src={Photo} alt="Card image cap" height="120px"/>
        <div className="card-body">
          <div className="d-flex">
            Name: {name}
          </div>
          <div className="d-flex">
            Salary: {salary}
          </div>
          <div className="d-flex">
            Age: {age}
          </div>
        </div>
      </div>
    </Layout>
		
	);
};
