import { observable } from "mobx";
import Services from "../services/Services.js";
import dispatcher from "../dispatcher.js";
import DataFetchActions from "../actions/DataFetchActions.js";

export class ProductStoreClass {
	@observable data: {}

	constructor() {
		dispatcher.register(this.handleActions);
	}

	fetchProductCatalogue(customerID) {
		const locationID = Services.customerLocation(customerID);
		return this.transformData(Services.catalogue(locationID));
	}

	transformData(catalogueData) {
		const transformedData = {};
		catalogueData.products.forEach((product) => {
			const productValue = { title: product.title, selected: false };
			if (transformedData[product.category]) {
				transformedData[product.category].push(productValue);
			} else {
				transformedData[product.category] = [productValue];
			}
		});
		return transformedData;
	}

	handleActions = (action) => {
		if (action.type === DataFetchActions.FETCH_PRODUCT_CATALOGUE) {
			this.data = this.fetchProductCatalogue(action.customerID);
		}
	}
}

export default new ProductStoreClass();
