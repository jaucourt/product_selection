import Services from "../../../../client/services/Services.js";

describe("Service tests", () => {
	describe("CustomerLocationService", () => {
		it("gets a LIVERPOOL location for a CustomerID of 1990", () => {
			expect(Services.customerLocation("1990")).toBe(1901);
		});

		it("gets a LONDON location for a CustomerID of 2004", () => {
			expect(Services.customerLocation("2004")).toBe(1931);
		});

		it("gets a LONDON location for a CustomerID of 2015", () => {
			expect(Services.customerLocation("2015")).toBe(1955);
		});

		it("gets an error when CustomerID is -1", () => {
			expect(() => Services.customerLocation("-1")).toThrow(new Error("Failure exception: customer not found"));
		});

		it("gets an empty location for any other CustomerID", () => {
			const sampleIDs = ["1992", "1995", "2020", "3012"];
			sampleIDs.forEach((sampleID) => {
				expect(Services.customerLocation(sampleID)).toBe(0);
			});
		});
	});

	describe("CatalogueService", () => {
		it("provides news products by default", () => {
			expectNewsServicesPresent(0);
		});

		it("provides news products to all locations", () => {
			const locationIDs = [1901, 1931, 1955];
			locationIDs.forEach((locationID) => {
				expectNewsServicesPresent(locationID);
			});
		});

		it("provides Arsenal TV product to London locationIDs", () => {
			const locationIDs = [1931, 1955];
			locationIDs.forEach((locationID) => {
				expect(Services.catalogue(locationID)).toEqual(jasmine.objectContaining({
					products: jasmine.arrayContaining([
						jasmine.objectContaining({ category: "Sports", title: "Arsenal TV" })
					])
				}));
			});
		});

		it("omits Arsenal TV product to non-London locationIDs", () => {
			const locationIDs = [0, 1901];
			locationIDs.forEach((locationID) => {
				expect(Services.catalogue(locationID)).not.toEqual(jasmine.objectContaining({
					products: jasmine.arrayContaining([
						jasmine.objectContaining({ category: "Sports", title: "Arsenal TV" })
					])
				}));
			});
		});

		it("provides Chelsea TV product to London locationIDs", () => {
			const locationIDs = [1931, 1955];
			locationIDs.forEach((locationID) => {
				expect(Services.catalogue(locationID)).toEqual(jasmine.objectContaining({
					products: jasmine.arrayContaining([
						jasmine.objectContaining({ category: "Sports", title: "Chelsea TV" })
					])
				}));
			});
		});


		it("omits Chelsea TV product to non-London locationIDs", () => {
			const locationIDs = [0, 1901];
			locationIDs.forEach((locationID) => {
				expect(Services.catalogue(locationID)).not.toEqual(jasmine.objectContaining({
					products: jasmine.arrayContaining([
						jasmine.objectContaining({ category: "Sports", title: "Chelsea TV" })
					])
				}));
			});
		});

		it("provides Liverpool TV product to Liverpool locationID", () => {
			expect(Services.catalogue(1901)).toEqual(jasmine.objectContaining({
				products: jasmine.arrayContaining([
					jasmine.objectContaining({ category: "Sports", title: "Liverpool TV" })
				])
			}));
		});

		it("omits Liverpool TV product to non-Liverpool locationIDs", () => {
			const locationIDs = [0, 1931, 1955];
			locationIDs.forEach((locationID) => {
				expect(Services.catalogue(locationID)).not.toEqual(jasmine.objectContaining({
					products: jasmine.arrayContaining([
						jasmine.objectContaining({ category: "Sports", title: "Liverpool TV" })
					])
				}));
			});
		});
	});
});

function expectNewsServicesPresent(locationID) {
	expect(Services.catalogue(locationID)).toEqual(jasmine.objectContaining({
		products: jasmine.arrayContaining([
			jasmine.objectContaining({ category: "News", title: "Sky News" }),
			jasmine.objectContaining({ category: "News", title: "Sky Sports News" })
		])
	}));
}
