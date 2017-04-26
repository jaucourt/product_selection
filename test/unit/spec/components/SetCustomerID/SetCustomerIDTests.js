import React from "react";
import jasmineEnzyme from "jasmine-enzyme";
import { shallowWithIntl } from "../../../helpers/intl-enzyme-test-helper.js";
import { SetCustomerID } from "../../../../../client/components/SetCustomerID/SetCustomerID.js";
import createMockCookies from "../../../helpers/CreateMockCookies.js";

describe("SetCustomerID tests", () => {
	beforeEach(() => {
		jasmineEnzyme();
	});

	it("renders a containing div", () => {
		expect(getComponent()).toHaveTagName("div");
	});

	it("has setCustomerID class", () => {
		expect(getComponent()).toHaveClassName("setCustomerID");
	});

	it("has Holloway button", () => {
		expect(getComponent().find("button.holloway")).toBePresent();
	});

	it("Holloway button sets customerID cookie to be 2004", () => {
		const mockCookies = createMockCookies();
		const holloway = getComponent(mockCookies).find("button.holloway");
		holloway.simulate("click");
		expect(mockCookies.set).toHaveBeenCalledWith("customerID", "2004");
	});

	it("has Chelsea button", () => {
		expect(getComponent().find("button.chelsea")).toBePresent();
	});

	it("Chelsea button sets customerID cookie to be 2015", () => {
		const mockCookies = createMockCookies();
		const holloway = getComponent(mockCookies).find("button.chelsea");
		holloway.simulate("click");
		expect(mockCookies.set).toHaveBeenCalledWith("customerID", "2015");
	});

	it("has Liverpool button", () => {
		expect(getComponent().find("button.liverpool")).toBePresent();
	});

	it("Liverpool button sets customerID cookie to be 1990", () => {
		const mockCookies = createMockCookies();
		const holloway = getComponent(mockCookies).find("button.liverpool");
		holloway.simulate("click");
		expect(mockCookies.set).toHaveBeenCalledWith("customerID", "1990");
	});
});

function getComponent(mockCookies = createMockCookies()) {
	return shallowWithIntl(<SetCustomerID cookies={mockCookies} />);
}
