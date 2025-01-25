import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container">
					<div className="d-flex justify-content-between w-100">
						<div className="d-flex justify-content-between">
							<Link className="navbar-brand" to="/">
								Navbar
							</Link>
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarNav"
								aria-controls="navbarNav"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse" id="navbarNav">
								<ul className="navbar-nav">
									<li className="nav-item">
										<Link className="nav-link" to="/">
											Home
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/about">
											About
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/contact">
											Contact
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div>
							<Link className="btn btn-outline-secondary me-3" to="/register">
								Register
							</Link>
							<Link className="btn btn-secondary" to="/login">
								Login
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
