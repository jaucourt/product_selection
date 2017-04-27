import React from "react";
import ConfirmationComponent from "../../components/Confirmation/Confirmation.js";
import ProductStore from "../../data/ProductStore.js";

export default class ConfirmationView extends React.Component {
	render() {
		return (
			<div className="confirmationView">
				<ConfirmationComponent store={ProductStore} />
			</div>
		);
	}
}
