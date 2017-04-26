import React from "react";
import jasmineEnzyme from "jasmine-enzyme";
import { shallowWithIntl, getIntlContext } from "../../helpers/intl-enzyme-test-helper.js";
import Home from "../../../../client/views/home/Home.js";
import ProductSelectionComponent from "../../../../client/components/ProductSelection/ProductSelection.js";
import ShoppingBasket from "../../../../client/components/ShoppingBasket/ShoppingBasket.js";
import ProductStore from "../../../../client/data/ProductStore.js";

describe("homepage", () => {
	beforeEach(() => {
		jasmineEnzyme();
	});

	it("generates containing div", () => {
		expect(getComponent()).toHaveTagName("div");
	});

	it("contains ProductSelection component", () => {
		expect(getComponent().find(ProductSelectionComponent)).toBePresent();
	});

	it("passes store to ProductSelection component", () => {
		expect(getComponent().find(ProductSelectionComponent)).toHaveProp("store", ProductStore);
	});

	it("contains ShoppingBasket component", () => {
		expect(getComponent().find(ShoppingBasket)).toBePresent();
	});

	it("passes store to ShoppingBasket component", () => {
		expect(getComponent().find(ShoppingBasket)).toHaveProp("store", ProductStore);
	});
});

function getComponent() {
	return shallowWithIntl(<Home />);
}
