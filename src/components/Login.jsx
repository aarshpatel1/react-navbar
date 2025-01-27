import React from "react";

function Login() {
	return (
		<>
			<div className="d-flex flex-column justify-content-center align-items-center">
				<h1 className="my-5 text-center">Login</h1>
				<form method="POST" className="p-5 rounded-4">
					<div className="mb-3">
						<label htmlFor="email" className="form-label">
							Email :
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="form-control"
							required
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="password" className="form-label">
							Password :
						</label>
						<input
							type="password"
							id="password"
							name="password"
							className="form-control"
							required
						/>
					</div>

					<p className="form-text my-4">
						If you haven't registered, <a href="/register">register here! </a>
					</p>
					<div className="d-flex align-items-center justify-content-center">
						<button type="submit" className="btn btn-secondary mt-3">
							Login
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default Login;
