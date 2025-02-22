import { Link } from "react-router-dom";
import ProductSuggestions from "../components/ProductSuggestions";

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

			<ProductSuggestions />

			<Link to={"/add-product"} className="btn btn-outline-secondary float-end">
				Add Product
			</Link>
		</>
	);
}

export default Products;
