import React from "react";
import PropTypes from "prop-types";
import { withCookies } from "react-cookie";

export class SetCustomerID extends React.Component {
	static propTypes = {
		cookies: PropTypes.object
	}

	onButtonClick = (customerID) => {
		this.props.cookies.set("customerID", customerID);
	}

	render() {
		return (
			<div className="setCustomerID">
				<button className="holloway" onClick={() => { this.onButtonClick("2004"); }}>Holloway</button>
				<button className="chelsea" onClick={() => { this.onButtonClick("2015"); }}>Chelsea</button>
				<button className="liverpool" onClick={() => { this.onButtonClick("1990"); }}>Liverpool</button>
			</div>
		);
	}
}

export default withCookies(SetCustomerID);
