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
				{ category: "News", title: "Sky News" },
				{ category: "News", title: "Sky Sports News" }
			]
		};
		switch (locationID) {
			case 1931:
			case 1955:
				data.products.push({ category: "Sports", title: "Arsenal TV" });
				data.products.push({ category: "Sports", title: "Chelsea TV" });
				break;
			case 1901:
				data.products.push({ category: "Sports", title: "Liverpool TV" });

			// no default
		}
		return data;
	}
}

export default new Services();
