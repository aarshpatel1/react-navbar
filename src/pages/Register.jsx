import React from "react";

function Register() {
	return (
		<>
			<div className="d-flex flex-column justify-content-center align-items-center">
				<h1 className="my-5 text-center">Register</h1>
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

					<div className="mb-3">
						<label htmlFor="confirm_password" className="form-label">
							Confirm Password :
						</label>
						<input
							type="password"
							id="confirm_password"
							name="confirm_password"
							className="form-control"
							required
						/>
					</div>

					<p className="form-text my-4">
						If you have already registered, <a href="/login">login here! </a>
					</p>
					<div className="d-flex align-items-center justify-content-center">
						<button type="submit" className="btn btn-secondary mt-3">
							Register
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default Register;
