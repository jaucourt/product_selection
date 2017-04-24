import React from "react";
import { render } from "react-dom";
import useBasename from "history/lib/useBasename";
import { browserHistory, Router } from "react-router";
import AsyncProps from "async-props";
import { IntlProvider } from "react-intl";
import routes from "./routes";

function addBasenameToHistory(history, dirname) {
	return useBasename(() => history)({ basename: `/${dirname}` });
}

const history = process.env.SQ_BASENAME ?
	addBasenameToHistory(browserHistory, process.env.SQ_BASENAME) :
	browserHistory;

render(
	<IntlProvider locale="en"><Router render={ props => <AsyncProps {...props}/>} history={ history } routes={ routes } /></IntlProvider>,
document.getElementById("app"));
