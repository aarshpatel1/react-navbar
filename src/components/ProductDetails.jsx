import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/productsData";

function ProductDetails() {
	const { productId } = useParams();
	const navigate = useNavigate();

	const product = products.find((product) => product.id == productId);

	return (
		<>
			<div className="my-5 shadow">
				<div className="row" style={{ height: "400px" }}>
					<div className="col-md-6 d-flex justify-content-center align-items-center">
						<img
							src={product.imageUrl}
							className="img-fluid h-100"
							alt="Product"
						/>
					</div>
					<div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
						<h2 className="mb-3">Product {productId}</h2>
						<p className="my-3">
							Product description goes here. It provides details about the
							product features, specifications, and other relevant information.
						</p>
						<h4 className="my-3">$99.99 <del className="ms-3">$109.99</del></h4>
						<div className="d-flex align-content-center my-3">
							<button
								className="btn btn-outline-secondary me-3"
								onClick={() => navigate(-1)}
							>
								Go Back
							</button>
							<button className="btn btn-success">Add to Cart</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductDetails;
