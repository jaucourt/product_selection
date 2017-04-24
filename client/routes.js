import React from "react";
import App from "./app.js";
import Home from "./views/home/Home.js";

class NotFound extends React.Component {
	render() {
		return (<h2>Not Found</h2>);
	}
}

const routes = {
	path: "/",
	component: App,
	indexRoute: { component: Home },
	childRoutes: [
		{ path: "*", component: NotFound }
	]
};

export default routes;
