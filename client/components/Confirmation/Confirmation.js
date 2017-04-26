import React from "react";
import PropTypes from "prop-types";

if (process.env.BROWSER) {
	// esline-disable-next-line global-require
	require("./Confirmation.less");
}

export default class Confirmation extends React.Component {
	static propTypes = {
		store: PropTypes.object.isRequired
	}

	renderSelectedProducts(selectedProducts) {
		return selectedProducts.map(product => (
			<li>{product.title}</li>
		));
	}

	renderHiddenInputs(selectedProducts) {
		return selectedProducts.map(product => (
			<input type="hidden" name="products[]" value={product.title} />
		));
	}

	render() {
		return (
			<form action="http://www.hashemian.com/tools/form-post-tester.php" method="POST">
				<span>These are the products you're about to purchase:</span>
				{ this.renderHiddenInputs(this.props.store.selectedProducts) }
				<ul className="selectedProducts">
					{ this.renderSelectedProducts(this.props.store.selectedProducts) }
				</ul>
				<button type="submit">submit</button>
			</form>
		);
	}
}
