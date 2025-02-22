import React from "react";

function AddProduct() {
	return (
		<>
			<div className="d-flex flex-column justify-content-center align-items-center">
				<h1 className="my-5 text-center">Add Product</h1>
				<form action="" method="" style={{ width: "50%" }}>
					<div className="mb-3">
						<label htmlFor="productName" className="form-label">
							Product Name
						</label>
						<input type="text" className="form-control" id="productName" />
					</div>
					<div className="mb-3">
						<label htmlFor="productDescription" className="form-label">
							Product Description
						</label>
						<textarea
							className="form-control"
							id="productDescription"
							rows="3"
						></textarea>
					</div>
					<div className="row">
						<div className="col-md-6 mb-3">
							<label htmlFor="productOldPrice" className="form-label">
								Product Old Price
							</label>
							<input
								type="number"
								className="form-control"
								id="productOldPrice"
							/>
						</div>
						<div className="col-md-6 mb-3">
							<label htmlFor="productNewPrice" className="form-label">
								Product New Price
							</label>
							<input
								type="number"
								className="form-control"
								id="productNewPrice"
							/>
						</div>
					</div>
					<div className="mb-3">
						<label htmlFor="productImage" className="form-label">
							Product Image URL
						</label>
						{/* <input type="file" className="form-control" id="productImage" /> */}
						<input type="text" className="form-control" id="productImage" />
					</div>
					<div className="mb-3">
						<label htmlFor="productCategory" className="form-label">
							Product Category
						</label>
						<select className="form-select" id="productCategory">
							<option value="none">Select Category</option>
							<option value="1">Electronics</option>
							<option value="2">Clothes</option>
							<option value="3">Accessories</option>
						</select>
					</div>
					<div className="d-flex align-items-center justify-content-center">
						<button type="submit" className="btn btn-secondary mt-3">
							Add Product
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default AddProduct;
