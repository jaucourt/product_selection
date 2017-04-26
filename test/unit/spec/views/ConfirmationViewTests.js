import React from "react";
import jasmineEnzyme from "jasmine-enzyme";
import { shallowWithIntl } from "../../helpers/intl-enzyme-test-helper.js";
import ConfirmationView from "../../../../client/views/confirmation/ConfirmationView.js";
import Confirmation from "../../../../client/components/Confirmation/Confirmation.js";
import ProductStore from "../../../../client/data/ProductStore.js";

describe("Confirmation View", () => {
	beforeEach(() => {
		jasmineEnzyme();
	});

	it("has a containing div", () => {
		expect(getComponent()).toHaveTagName("div");
	});

	it("has classname of confirmationView", () => {
		expect(getComponent()).toHaveClassName("confirmationView");
	});

	it("has explanatory text", () => {
		expect(getComponent().find("span")).toHaveText("These are the products you're about to purchase");
	});

	it("contains Confirmation component", () => {
		expect(getComponent().find(Confirmation)).toBePresent();
	});

	it("provides correct store", () => {
		expect(getComponent().find(Confirmation)).toHaveProp("store", ProductStore);
	});
});

function getComponent() {
	return shallowWithIntl(<ConfirmationView />);
}
