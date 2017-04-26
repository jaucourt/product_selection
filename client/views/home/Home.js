import React from "react";
import ProductSelectionComponent from "../../components/ProductSelection/ProductSelection.js";
import ShoppingBasket from "../../components/ShoppingBasket/ShoppingBasket.js";
import ProductStore from "../../data/ProductStore.js";

export default class Home extends React.Component {
	render() {
		return (
			<div className="home">
				<ProductSelectionComponent store={ProductStore} />
				<ShoppingBasket store={ProductStore} />
			</div>
		);
	}
}
