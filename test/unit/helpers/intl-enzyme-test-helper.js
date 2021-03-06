/**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * These helper functions aim to address that and wrap a valid,
 * English-locale intl context around them.
 */

import React from "react";
import { IntlProvider, intlShape } from "react-intl";
import { mount, shallow } from "enzyme";
import en from "react-intl/locale-data/en";

// Create the IntlProvider to retrieve context for wrapping around.
const intlProvider = new IntlProvider({ locale: "en", en }, {});
const { intl } = intlProvider.getChildContext();

/**
 * When using React-Intl `injectIntl` on components, props.intl is required.
 */
function nodeWithIntlProp(node) {
	return React.cloneElement(node, { intl });
}

export function shallowWithIntl(node, options = {}) {
	return shallow(
		nodeWithIntlProp(node),
		{
			context: { intl },
			...options
		}
	);
}

export function mountWithIntl(node) {
	return mount(
		nodeWithIntlProp(node),
		{
			context: { intl },
			childContextTypes: { intl: intlShape }
		}
	);
}

export function getIntlContext() {
	return intl;
}
