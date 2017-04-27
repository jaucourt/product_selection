import React from "react";
import jasmineEnzyme from "jasmine-enzyme";
import { shallowWithIntl } from "../../../helpers/intl-enzyme-test-helper.js";
import Confirmation from "../../../../../client/components/Confirmation/Confirmation.js";

describe("Confirmation tests", () => {
	beforeEach(() => {
		jasmineEnzyme();
	});

	it("has containing form", () => {
		expect(getComponent()).toHaveTagName("form");
	});

	it("has correct action", () => {
		expect(getComponent()).toHaveProp("action", "http://www.hashemian.com/tools/form-post-tester.php");
	});

	it("has correct method", () => {
		expect(getComponent()).toHaveProp("method", "POST");
	});

	it("has list of selected products", () => {
		expect(getComponent().find("ul.selectedProducts")).toBePresent();
	});

	it("has explanatory text", () => {
		expect(getComponent().find("span")).toHaveText("These are the products you're about to purchase:");
	});

	it("displays list item for each selected product", () => {
		const selectedProducts = getSampleSelectedProducts();
		expect(getComponent({ selectedProducts }).find("ul.selectedProducts li").length).toBe(selectedProducts.length);
	});

	it("dispays title in list item for each selected product", (done) => {
		const selectedProducts = getSampleSelectedProducts();
		const component = getComponent({ selectedProducts });
		const items = component.find("ul.selectedProducts li");

		selectedProducts.forEach((product, idx) => {
			expect(items.at(idx)).toHaveText(product.title);
			if (idx === selectedProducts.length - 1) done();
		});
	});

	it("creates hidden input for each selected product", () => {
		const selectedProducts = getSampleSelectedProducts();
		const component = getComponent({ selectedProducts });
		expect(component.find('input[type="hidden"]').length).toBe(selectedProducts.length);
	});

	it("each hidden input has name of products[]", () => {
		const selectedProducts = getSampleSelectedProducts();
		const component = getComponent({ selectedProducts });
		const inputs = component.find('input[type="hidden"]');
		for (let x = 0; x < selectedProducts.length; x += 1) {
			expect(inputs.at(x)).toHaveProp("name", "products[]");
		}
	});

	it("each hidden input has a value of the product title", () => {
		const selectedProducts = getSampleSelectedProducts();
		const component = getComponent({ selectedProducts });
		const inputs = component.find('input[type="hidden"]');
		for (let x = 0; x < selectedProducts.length; x += 1) {
			expect(inputs.at(x)).toHaveProp("value", selectedProducts[x].title);
		}
	});

	it("has a submit button", () => {
		expect(getComponent().find('button[type="submit"]')).toBePresent();
	});


	it("submit button has text 'submit'", () => {
		expect(getComponent().find('button[type="submit"]')).toHaveText("submit");
	});
});

function getSampleSelectedProducts() {
	return [
		{ title: "Product 1", selected: true },
		{ title: "Product 2", selected: true },
		{ title: "Product 3", selected: true },
		{ title: "Product 4", selected: true }
	];
}

function getComponent(store = { selectedProducts: [] }) {
	return shallowWithIntl(<Confirmation store={store} />);
}
