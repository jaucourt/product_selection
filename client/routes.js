import React from "react";
import App from "./app.js";
import HomeView from "./views/home/Home.js";
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
		{ path: "setCustomerID", component: SetCustomerIDView },
		{ path: "*", component: NotFound }
	]
};

export default routes;
