import React from "react";
import Confirmation from "../../components/Confirmation/Confirmation.js";
import ProductStore from "../../data/ProductStore.js";

export default class ConfirmationView extends React.Component {
	render() {
		return (
			<div className="confirmationView">
				<Confirmation store={ProductStore} />
			</div>
		);
	}
}
