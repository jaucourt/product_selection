import React from "react";
import PropTypes from "prop-types";
import { withCookies } from "react-cookie";

if (process.env.BROWSER) {
	// esline-disable-next-line global-require
	require("./Confirmation.less");
}

export class Confirmation extends React.Component {
	static propTypes = {
		store: PropTypes.object.isRequired,
		cookies: PropTypes.object.isRequired
	}

	renderSelectedProducts(selectedProducts) {
		return selectedProducts.map(product => (
			<li>{product.title}</li>
		));
	}

	renderProductsInHiddenInputs(selectedProducts) {
		return selectedProducts.map(product => (
			<input type="hidden" name="products" value={product.title} />
		));
	}

	render() {
		return (
			<form action="http://localhost:3000/" method="POST">
				<span>These are the products you're about to purchase:</span>
				<input type="hidden" name="customerID" value={this.props.cookies.get("customerID")} />
				{ this.renderProductsInHiddenInputs(this.props.store.selectedProducts) }
				<ul className="selectedProducts">
					{ this.renderSelectedProducts(this.props.store.selectedProducts) }
				</ul>
				<button type="submit">submit</button>
			</form>
		);
	}
}

export default withCookies(Confirmation);
