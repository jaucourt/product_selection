import React from "react";
import jasmineEnzyme from "jasmine-enzyme";
import { ProductSelection } from "../../../../../client/components/ProductSelection/ProductSelection.js";
import DataFetchActions from "../../../../../client/actions/DataFetchActions.js";
import { shallowWithIntl, mountWithIntl } from "../../../helpers/intl-enzyme-test-helper.js";
import createMockCookies from "../../../helpers/CreateMockCookies.js";

describe("Product Selection component tests", () => {
	beforeEach(() => {
		jasmineEnzyme();
	});

	it("is a mobx observer", () => {
		expect(ProductSelection.isMobXReactObserver).toBeTruthy();
	});

	it("makes request to load customer products with customerID cookie", () => {
		const sampleCustomerID = "1010";
		const fakeCookies = { get: jasmine.createSpy("cookies.get spy").and.returnValue(sampleCustomerID) };
		const loadCustomerProductsSpy = spyOn(DataFetchActions, "loadCustomerProducts");

		getMountedComponent(fakeCookies);

		expect(fakeCookies.get).toHaveBeenCalledWith("customerID");
		expect(loadCustomerProductsSpy).toHaveBeenCalledWith(sampleCustomerID);
	});

	it("generates a containing div", () => {
		expect(getShallowComponent()).toHaveTagName("div");
	});

	it("containing div has productSelection class", () => {
		expect(getShallowComponent()).toHaveClassName("productSelection");
	});

	it("generates category div for each category in data store", () => {
		const store = getMockStore();
		const component = getShallowComponent(undefined, store);

		expect(component.find("div.category").length).toBe(Object.keys(store.data).length);
	});

	it("category div has title in h2", () => {
		const store = getMockStore();
		const categories = Object.keys(store.data);
		const component = getShallowComponent(undefined, store);

		for (let x = 0; x < categories.length; x += 1) {
			expect(component.find("div.category").at(x).find("h2")).toHaveText(categories[x]);
		}
	});

	it("category div has an unordered list with class of products", () => {
		const store = getMockStore();
		const component = getShallowComponent(undefined, store);

		for (let x = 0; x < Object.keys(store.data).length; x += 1) {
			expect(component.find("div.category ul.products")).toBePresent();
		}
	});

	it("category div has a list item for each product", () => {
		const store = getMockStore();
		const categories = Object.keys(store.data);
		const component = getShallowComponent(undefined, store);

		for (let x = 0; x < categories.length; x += 1) {
			expect(component.find("div.category ul.products").at(x).find("li").length)
				.toBe(store.data[categories[x]].length);
		}
	});

	it("each list item has a product label", () => {
		const store = getMockStore();
		const component = getShallowComponent(undefined, store);

		store.data.cat1.forEach((product, idx) => {
			expect(component.find("div.category").at(0).find("li").at(idx)).toHaveText(product.title);
		});
	});

	it("each list item has a checkbox", () => {
		const store = getMockStore();
		const categories = Object.keys(store.data);
		const component = getShallowComponent(undefined, store);

		for (let x = 0; x < categories.length; x += 1) {
			expect(component.find("div.category ul.products").at(x).find('li input[type="checkbox"]').length)
				.toBe(store.data[categories[x]].length);
		}
	});

	it("each checkbox has a name of the product title", () => {
		const store = getMockStore();
		const component = getShallowComponent(undefined, store);

		for (let x = 0; x < store.data.cat1.length; x += 1) {
			expect(component.find('div.category ul.products li input[type="checkbox"]').at(x)).toHaveProp("name", store.data.cat1[x].title);
		}
	});


	it("selecting checkbox updates product selected value", () => {
		const store = getMockStore();
		const component = getShallowComponent(undefined, store);

		component.find('div.category ul.products li input[type="checkbox"]').at(1).simulate("change");

		expect(store.data.cat1[1].selected).toBeTruthy();
	});
});

function getMockStore() {
	return {
		data: {
			cat1: [
				{ title: "Channel 1", selected: false },
				{ title: "Channel 2", selected: false },
				{ title: "Channel 3", selected: false }
			],
			cat2: [
				{ title: "Channel 3", selected: false },
				{ title: "Channel 4", selected: false }
			]
		}
	};
}

function getMountedComponent(fakeCookies, store) {
	return getComponent(fakeCookies, store, mountWithIntl);
}

function getShallowComponent(fakeCookies, store) {
	return getComponent(fakeCookies, store, shallowWithIntl);
}

function getComponent(fakeCookies = createMockCookies(), store = { data: {} }, renderMethod) {
	return renderMethod(<ProductSelection store={store} cookies={fakeCookies} />);
}
