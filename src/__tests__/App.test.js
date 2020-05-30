/* eslint-disable import/extensions */
import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Routes from "../app.js";


const mockStore = configureMockStore();
const store = mockStore({});

describe("Routes Component", () => {
  it("should render without throwing an error", () => {
    const wrap = shallow(
      <Provider store={store}>
                    <Routes />
                </Provider>
    );
    expect(wrap).toMatchSnapshot();
  });
});
