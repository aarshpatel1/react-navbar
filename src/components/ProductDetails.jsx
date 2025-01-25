import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/productsData"

function ProductDetails() {
	const { productId } = useParams();
	const navigate = useNavigate();

	const product = products.find((product) => product.id == productId);

	return (
		<>
			<div className="container my-5">
				<div className="row">
					<div className="col-md-6">
						<img src={product.imageUrl} className="img-fluid" alt="Product" />
					</div>
					<div className="col-md-6">
						<h2>Product {productId}</h2>
						<p>
							Product description goes here. It provides details about the
							product features, specifications, and other relevant information.
						</p>
						<h4>$99.99</h4>
						<button
							className="btn btn-outline-secondary me-2"
							onClick={() => navigate(-1)}
						>
							Go Back
						</button>
						<button className="btn btn-success">Add to Cart</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductDetails;
