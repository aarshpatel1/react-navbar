import { useParams, useNavigate, Link } from "react-router-dom";
import products from "../data/productsData";
import ProductSuggestions from "../components/ProductSuggestions";

function ProductDetails() {
	const { productId } = useParams();
	const navigate = useNavigate();

	const product = products.find((product) => product.id == productId);

	return (
		<>
			<div className="my-5">
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
							<Link to={`/payment/${product.id}`} className="btn btn-success">Add to Cart</Link>
						</div>
					</div>
				</div>
			</div>

			<h2 className="my-5 text-center pt-5">You may also like</h2>
			<ProductSuggestions />
		</>
	);
}

export default ProductDetails;
