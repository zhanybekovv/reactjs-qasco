import React from 'react';

export const Layout = (props) => {
  const exit = () =>{
    localStorage.removeItem("Admin")
    localStorage.removeItem("authorized")
  }
	return (
		<div>
			<ul className="nav">
				<li className="nav-item">
					<a className="nav-link active" href="/dashboard">
						Dashboard
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" onClick={exit} href="/login">
						Exit
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/settings">
						Setting
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/employee">
						Employee
					</a>
				</li>
			</ul>
      <div>
        {props.children}
      </div>
		</div>
	);
};
