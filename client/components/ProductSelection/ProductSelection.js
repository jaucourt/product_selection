import React from "react";
import PropTypes from "prop-types";
// import { injectIntl, intlShape } from "react-intl";
import { observer } from "mobx-react";
import { withCookies } from "react-cookie";
import DataFetchActions from "../../actions/DataFetchActions.js";

if (process.env.BROWSER) {
	// eslint-disable-next-line global-require
	require("./ProductSelection.less");
}

@observer
export class ProductSelection extends React.Component {
	static propTypes = {
		store: PropTypes.object,
		cookies: PropTypes.object
	}

	componentWillMount() {
		DataFetchActions.loadCustomerProducts(this.props.cookies.get("customerID"));
	}

	onProductChange(product) {
		product.selected = !product.selected;
	}

	renderProducts(products) {
		return products.map(product =>
			(
				<li><input type="checkbox" name={product.title} onChange={() => { this.onProductChange(product); }} />{ product.title }</li>
			)
		);
	}

	renderCategories(categories) {
		const categoryNames = Object.keys(categories);
		return categoryNames.map(categoryName =>
			(
				<div className="category">
					<h2>{categoryName}</h2>
					<ul className="products">
						{this.renderProducts(categories[categoryName])}
					</ul>
				</div>
			)
		);
	}

	render() {
		return (
			<div className="productSelection">
				{this.renderCategories(this.props.store.data)}
			</div>
		);
	}
}

export default withCookies(ProductSelection);
