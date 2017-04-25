import DataFetchActions from "../../../../client/actions/DataFetchActions.js";
import dispatcher from "../../../../client/dispatcher.js";

describe("Data fetch actions tests", () => {
	it("dispatches action with type fetch_product_catalogue when loadCustomerProducts called", () => {
		const dispatchSpy = spyOn(dispatcher, "dispatch");
		DataFetchActions.loadCustomerProducts();
		expect(dispatchSpy).toHaveBeenCalledWith(jasmine.objectContaining({ type: DataFetchActions.FETCH_PRODUCT_CATALOGUE }));
	});

	it("dispatches action with provided customerID when loadCustomerProducts called", () => {
		const dispatchSpy = spyOn(dispatcher, "dispatch");
		const customerID = "1992";
		DataFetchActions.loadCustomerProducts(customerID);
		expect(dispatchSpy).toHaveBeenCalledWith(jasmine.objectContaining({ customerID }));
	});
});
