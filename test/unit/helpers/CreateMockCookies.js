export default function createMockCookies(customerID = "1010") {
	return {
		get: jasmine.createSpy("cookies.get spy").and.returnValue(customerID),
		set: jasmine.createSpy("cookies.set spy")
	};
}
