import React from "react";
import jasmineEnzyme from "jasmine-enzyme";
import { shallowWithIntl } from "../../helpers/intl-enzyme-test-helper.js";
import SetCustomerIDView from "../../../../client/views/SetCustomerIDView//SetCustomerIDView.js";
import SetCustomerIDComponent from "../../../../client/components/SetCustomerID/SetCustomerID.js";

describe("SetCustomerIDView tests", () => {
	beforeEach(() => {
		jasmineEnzyme();
	});

	it("creates containing div", () => {
		expect(getComponent()).toHaveTagName("div");
	});

	it("adds SetCustomerIDView class", () => {
		expect(getComponent()).toHaveClassName("setCustomerIDView");
	});

	it("contains SetCustomerID component", () => {
		expect(getComponent().find(SetCustomerIDComponent)).toBePresent();
	});
});

function getComponent() {
	return shallowWithIntl(<SetCustomerIDView />);
}
