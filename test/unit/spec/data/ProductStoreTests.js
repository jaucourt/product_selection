import mobx from "mobx";
import { ProductStoreClass } from "../../../../client/data/ProductStore.js";
import Services from "../../../../client/services/Services.js";
import dispatcher from "../../../../client/dispatcher.js";
import DataFetchActions from "../../../../client/actions/DataFetchActions.js";

describe("Product Store tests", () => {
	it("registers with distpatcher on instantiation", () => {
		const { registerSpy, store } = getStore();
		expect(registerSpy).toHaveBeenCalledWith(store.handleActions);
	});

	it("groups products by category after receiving FETCH_PRODUCT_CATALOGUE action", () => {
		spyOn(Services, "customerLocation").and.returnValue(1010);
		spyOn(Services, "catalogue").and.returnValue({
			products: [
				{ category: "Cat1", title: "Channel 1" },
				{ category: "Cat2", title: "Channel 2" },
				{ category: "Cat1", title: "Channel 3" },
				{ category: "Cat2", title: "Channel 4" }
			]
		});
		const { store } = getStore();

		store.handleActions({ type: DataFetchActions.FETCH_PRODUCT_CATALOGUE, customerID: "1111" });

		expect(store.data.Cat1.slice()).toEqual(jasmine.arrayContaining([
			jasmine.objectContaining({ title: "Channel 1", selected: false }),
			jasmine.objectContaining({ title: "Channel 3", selected: false })
		]));
		expect(store.data.Cat2.slice()).toEqual(jasmine.arrayContaining([
			jasmine.objectContaining({ title: "Channel 2", selected: false }),
			jasmine.objectContaining({ title: "Channel 4", selected: false })
		]));
	});

	it("is observable", () => {
		const { store } = getStore();
		expect(mobx.isObservable(store)).toBeTruthy();
	});
});

function getStore() {
	const registerSpy = spyOn(dispatcher, "register");
	const store = new ProductStoreClass();
	return { registerSpy, store };
}
