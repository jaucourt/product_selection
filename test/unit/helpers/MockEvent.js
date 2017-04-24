export default {
	preventDefault: jasmine.createSpy(),
	nativeEvent: {
		stopImmediatePropagation: jasmine.createSpy()
	}
};
