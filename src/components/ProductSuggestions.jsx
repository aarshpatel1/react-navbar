import products from "../data/productsData";
import { Link, Outlet } from "react-router-dom";

function ProductSuggestions() {
	return (
		<>
			<div className="row row-cols-1 row-cols-md-4 gx-4 gy-0">
				{products.map((product) => (
					<div key={product.id} className="col pb-5">
						<div className="card h-100 shadow">
							<img
								src={product.imageUrl}
								className="card-img-top object-fit-cover"
								style={{ height: "200px" }}
								alt={product.name}
							/>
							<div className="card-body">
								<h5 className="card-title">{product.name}</h5>
								<p className="card-text">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Dolores, dolorem !
								</p>
							</div>
							<div className="card-footer text-center">
								<Link to={`/products/${product.id}`}>
									<button className="btn btn-outline-secondary me-2">
										View details
									</button>
								</Link>
								<Link to={`/payment/${product.id}`} className="btn btn-secondary">Add to cart</Link>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* <Outlet /> */}
		</>
	);
}

export default ProductSuggestions;
