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
				<button className="location1" onClick={() => { this.onButtonClick("2004"); }}>Location 1</button>
				<button className="location2" onClick={() => { this.onButtonClick("2015"); }}>Location 2</button>
				<button className="location3" onClick={() => { this.onButtonClick("1990"); }}>Location 3</button>
			</div>
		);
	}
}

export default withCookies(SetCustomerID);
