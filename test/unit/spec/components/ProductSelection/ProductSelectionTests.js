import React from "react";
import jasmineEnzyme from "jasmine-enzyme";
import { ProductSelection } from "../../../../../client/components/ProductSelection/ProductSelection.js";
import DataFetchActions from "../../../../../client/actions/DataFetchActions.js";
import { shallowWithIntl, mountWithIntl, getIntlContext } from "../../../helpers/intl-enzyme-test-helper.js";

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
});

function createFakeCookies(customerID = "1010") {
	return { get: jasmine.createSpy("cookies.get spy").and.returnValue(customerID) };
}

function getMountedComponent(fakeCookies = createFakeCookies()) {
	const component = mountWithIntl(<ProductSelection store={{}} cookies={fakeCookies} intl={getIntlContext()} />);
	return component;
}

function getShallowComponent(fakeCookies = createFakeCookies()) {
	const component = shallowWithIntl(<ProductSelection store={{}} cookies={fakeCookies} intl={getIntlContext()} />);
	return component;
}
