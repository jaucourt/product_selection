import React from "react";
import App from "./app.js";
import HomeView from "./views/home/Home.js";
import ConfirmationView from "./views/confirmation/ConfirmationView.js";
import SetCustomerIDView from "./views/SetCustomerIDView/SetCustomerIDView.js";

class NotFound extends React.Component {
	render() {
		return (<h2>Not Found</h2>);
	}
}

const routes = {
	path: "/",
	component: App,
	indexRoute: { component: HomeView },
	childRoutes: [
		{ path: "confirmation", component: ConfirmationView },
		{ path: "setCustomerID", component: SetCustomerIDView },
		{ path: "*", component: NotFound }
	]
};

export default routes;
