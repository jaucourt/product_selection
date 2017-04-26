import React from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import { Link } from "react-router";

if (process.env.BROWSER) {
	// eslint-disable-next-line global-require
	require("./ShoppingBasket.less");
}

@observer
export default class ShoppingBasket extends React.Component {
	static propTypes = {
		store: PropTypes.object.isRequired
	}

	renderSelectedProducts(selectedProducts) {
		return selectedProducts.map(selectedProduct =>
			(<li>{selectedProduct.title}</li>)
		);
	}

	render() {
		return (
			<div className="shoppingBasket">
				<h2>Basket</h2>
				<ul>
					{this.renderSelectedProducts(this.props.store.selectedProducts)}
				</ul>
				<Link className="checkout" to="/confirmation">Checkout</Link>
			</div>
		);
	}
}
