import React, { PropTypes } from "react";
import { injectIntl, intlShape } from "react-intl";
import { observer } from "mobx-react";
import DataFetchActions from "../../actions/DataFetchActions.js";

@observer
export class ProductSelection extends React.Component {
	static propTypes = {
		store: PropTypes.object,
		cookies: PropTypes.object,
		intl: intlShape.isRequired
	}

	componentWillMount() {
		DataFetchActions.loadCustomerProducts(this.props.cookies.get("customerID"));
	}

	render() {
		return (<div className="productSelection"></div>);
	}
}

export default injectIntl(ProductSelection);
