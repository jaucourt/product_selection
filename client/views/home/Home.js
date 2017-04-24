import React from "react";
import { intlShape, injectIntl } from "react-intl";

class Home extends React.Component {
	static propTypes = {
		intl: intlShape.isRequired
	}

	render() {
		return (
		<div>
		</div>);
	}
}

export default injectIntl(Home);
