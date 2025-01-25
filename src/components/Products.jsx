import React from "react";
import { Link, Outlet } from "react-router-dom";
import products from "../data/productsData";

function Products() {
	return (
		<>
			<h1 className="my-5 text-center">Products</h1>
			<p className="text-center my-5">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
				dolorem. Placeat laudantium ut consequuntur ullam ipsa excepturi. Dolor
				obcaecati ducimus beatae expedita molestias debitis natus doloremque
				consequuntur explicabo, accusamus maiores!
			</p>

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
								<button className="btn btn-secondary">Add to cart</button>
							</div>
						</div>
					</div>
				))}
			</div>

			<Outlet />
		</>
	);
}

export default Products;
