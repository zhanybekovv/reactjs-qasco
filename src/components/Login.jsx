import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'

export const Login = () => {
	const [ authData, setAuthData ] = useState({ login: '', password: '' });
	const [ authError, setAuthError ] = useState();
	const history = useHistory()

	useEffect(() => {
    localStorage.setItem('Admin', '12345');
	});

	const submit = () => {
		const userData = localStorage.getItem(authData.login);
		if (userData !== authData.password) {
			setAuthError('Имя пользователя или пароль введены не верно');
		}else{
	  localStorage.setItem('authorized', true)
	  history.push("/dashboard")
    }
	};
	const onChangeHandle = (event) => {
		setAuthData({ ...authData, [event.target.name]: event.target.value });
		console.log(authData);
	};
	return (
		// <div className="w-50 text-center">
		<div className="text-center w-25">
			<form className="form-signin">
				<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
				<label className="sr-only">Email address</label>
				<input
					name="login"
					id="inputEmail"
					className="form-control"
					placeholder="Email address"
					onChange={onChangeHandle}
					required
				/>
				<label className="sr-only">Password</label>
				<input
					name="password"
					type="password"
					id="inputPassword"
					className="form-control"
					placeholder="Password"
					required={true}
					onChange={onChangeHandle}
				/>
				{authError ? <div className="text-danger">{authError}</div> : <div />}
				<button className="btn btn-lg btn-primary btn-block" type="submit" onClick={submit}>
					Sign in
				</button>
			</form>
		</div>
		// </div>
	);
};
