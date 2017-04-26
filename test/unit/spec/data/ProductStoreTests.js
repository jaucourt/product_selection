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
				{ category: "Cat 1", title: "Channel 1" },
				{ category: "Cat 2", title: "Channel 2" },
				{ category: "Cat 1", title: "Channel 3" },
				{ category: "Cat 2", title: "Channel 4" }
			]
		});
		const { store } = getStore();

		store.handleActions({ type: DataFetchActions.FETCH_PRODUCT_CATALOGUE, customerID: "1111" });

		expect(store.data["Cat 1"].slice()).toEqual(jasmine.arrayContaining([
			jasmine.objectContaining({ title: "Channel 1", selected: false }),
			jasmine.objectContaining({ title: "Channel 3", selected: false })
		]));
		expect(store.data["Cat 2"].slice()).toEqual(jasmine.arrayContaining([
			jasmine.objectContaining({ title: "Channel 2", selected: false }),
			jasmine.objectContaining({ title: "Channel 4", selected: false })
		]));
	});

	it("provides list of selected products", () => {
		spyOn(Services, "customerLocation").and.returnValue(1010);
		spyOn(Services, "catalogue").and.returnValue({
			products: [
				{ category: "Cat 1", title: "Channel 1" },
				{ category: "Cat 2", title: "Channel 2" },
				{ category: "Cat 1", title: "Channel 3" },
				{ category: "Cat 2", title: "Channel 4" }
			]
		});
		const { store } = getStore();
		store.handleActions({ type: DataFetchActions.FETCH_PRODUCT_CATALOGUE, customerID: "1111" });

		store.data["Cat 1"][1].selected = true;
		store.data["Cat 2"][0].selected = true;

		expect(store.selectedProducts).toEqual(jasmine.arrayContaining([
			jasmine.objectContaining(store.data["Cat 1"][1]),
			jasmine.objectContaining(store.data["Cat 2"][0])
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
