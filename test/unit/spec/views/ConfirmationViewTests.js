import React from "react";
import jasmineEnzyme from "jasmine-enzyme";
import { shallowWithIntl, mountWithIntl } from "../../helpers/intl-enzyme-test-helper.js";
import ConfirmationView from "../../../../client/views/confirmation/ConfirmationView.js";
import ConfirmationComponent from "../../../../client/components/Confirmation/Confirmation.js";
import ProductStore from "../../../../client/data/ProductStore.js";

describe("Confirmation View", () => {
	beforeEach(() => {
		jasmineEnzyme();
	});

	it("has a containing div", () => {
		expect(getComponent()).toHaveTagName("div");
	});

	it("has classname of confirmationView", () => {
		expect(getComponent()).toHaveProp("className", "confirmationView");
	});

	it("contains Confirmation component", () => {
		expect(getComponent().find(ConfirmationComponent)).toBePresent();
	});

	it("provides correct store", () => {
		expect(getComponent().find(ConfirmationComponent)).toHaveProp("store", ProductStore);
	});
});

function getComponent() {
	return shallowWithIntl(<ConfirmationView />);
}
