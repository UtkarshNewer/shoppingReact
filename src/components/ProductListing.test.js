import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import ProductListing from "./ProductListing";

const mockStore = configureMockStore();
const store = mockStore({});

describe("Testpage Component", () => {
    it("should render without throwing an error", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <ProductListing />
                </Provider>
            ).exists(<h2>Product Listing</h2>)
        ).toBe(true);
    });
});