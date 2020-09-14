import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadData, createUser } from '../store/actions';

const Layout = (props) => {
  const exit = () =>{
    localStorage.removeItem("Admin")
    localStorage.removeItem("authorized")
  }
  useEffect(() => {
	props.action();
}, []);
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

const mapStateToProps = (state) => {
	return {
		users: state
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		action: bindActionCreators(loadData, dispatch),
		create: bindActionCreators(createUser, dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);