import React, { useState } from 'react';

export const Login = () => {
	const [ authData, setAuthData ] = useState({ login: '', password: '' });
	const submit = () => {
		console.log('ffff');
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
					type="email"
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
					required
					onChange={onChangeHandle}
				/>
				<div className="checkbox mb-3">
					<label>
						<input type="checkbox" value="remember-me" /> Remember me
					</label>
				</div>
				<button className="btn btn-lg btn-primary btn-block" type="submit" onClick={submit}>
					Sign in
				</button>
			</form>
		</div>
		// </div>
	);
};
