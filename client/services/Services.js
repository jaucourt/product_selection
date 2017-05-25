class Services {
	customerLocation(customerID) {
		switch (customerID) {
			case "-1":
				throw new Error("Failure exception: customer not found");
			case "1990":
				return 1901;
			case "2004":
				return 1931;
			case "2015":
				return 1955;
			default:
				return 0;
		}
	}

	catalogue(locationID) {
		const data = {
			products: [
				{ category: "Category 1", title: "Product 1" },
				{ category: "Category 1", title: "Product 2" }
			]
		};
		switch (locationID) {
			case 1931:
			case 1955:
				data.products.push({ category: "Category 2", title: "Product 3" });
				data.products.push({ category: "Category 2", title: "Product 4" });
				break;
			case 1901:
				data.products.push({ category: "Category 2", title: "Product 5" });

			// no default
		}
		return data;
	}
}

export default new Services();
