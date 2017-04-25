import dispatcher from "../dispatcher.js";

class DataFetchActions {
	static FETCH_PRODUCT_CATALOGUE = "fetch_product_catalogue"

	loadCustomerProducts(customerID) {
		dispatcher.dispatch({ customerID, type: this.FETCH_PRODUCT_CATALOGUE });
	}
}

export default new DataFetchActions();
