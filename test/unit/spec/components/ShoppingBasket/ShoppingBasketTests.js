import React from "react";
import jasmineEnzyme from "jasmine-enzyme";
import { shallowWithIntl } from "../../../helpers/intl-enzyme-test-helper.js";
import ShoppingBasket from "../../../../../client/components/ShoppingBasket/ShoppingBasket.js";

describe("Shopping Basket tests", () => {
	beforeEach(() => {
		jasmineEnzyme();
	});

	it("is a mobx observer", () => {
		expect(ShoppingBasket.isMobXReactObserver).toBeTruthy();
	});

	it("creates containing div", () => {
		expect(getComponent()).toHaveTagName("div");
	});

	it("has shoppingBasket class", () => {
		expect(getComponent()).toHaveClassName("shoppingBasket");
	});

	it("renders a title", () => {
		expect(getComponent().find("h2")).toBePresent();
	});

	it("title has correct text", () => {
		expect(getComponent().find("h2")).toHaveText("Basket");
	});

	it("renders ul", () => {
		expect(getComponent().find("ul")).toBePresent();
	});

	it("renders li for each selected product", () => {
		expect(getComponent({
			selectedProducts: [
				{ title: "Product 1", selected: true },
				{ title: "Product 2", selected: true }
			]
		}).find("li").length).toBe(2);
	});

	it("each li has product title", () => {
		const selectedProducts = [
			{ title: "Product 1", selected: true },
			{ title: "Product 2", selected: true }
		];
		const component = getComponent({ selectedProducts });

		expect(component.find("li").at(0)).toHaveText(selectedProducts[0].title);
		expect(component.find("li").at(1)).toHaveText(selectedProducts[1].title);
	});
});

function getComponent(store = { selectedProducts: [] }) {
	return shallowWithIntl(<ShoppingBasket store={store} />);
}
