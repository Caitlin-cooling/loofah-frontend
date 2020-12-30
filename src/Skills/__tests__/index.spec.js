import React from "react";
import { Skills } from "../index";
import { GET_SKILLS_BY_CATEGORY_QUERY } from "../queries";
import { act, render } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
const wait = require("waait");

const mock = {
    request: {
      query: GET_SKILLS_BY_CATEGORY_QUERY
    },
    result: {
      data: {
        skillsByCategory: [{ id: "1", title: "Title" }],
      },
    },
  };

let wrapper;

test("renders without error", () => {
  act(() => {
    render(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <Skills />
      </MockedProvider>
    );
  });
});

test("loading state", () => {
  act(() => {
    wrapper = render(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <Skills />
      </MockedProvider>
    );
  });
  const { getByText } = wrapper;
  expect(getByText("Loading...").textContent).toBe("Loading...");
});

test("error response", async () => {
  const errorMock = {
      request: {
        query: GET_SKILLS_BY_CATEGORY_QUERY
      },
      result: {
        error: new Error("Error")
      },
    };
  act(() => {
    wrapper = render(
      <MockedProvider mocks={[errorMock]} addTypename={false}>
        <Skills />
      </MockedProvider>
    );
  });
  await wait(0);
  const { getByText } = wrapper;
  expect(getByText("Error").textContent).toBe("Error");
});

test("renders skill", async () => {
  act(() => {
    wrapper = render(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <Skills />
      </MockedProvider>
    );
  });
  await wait(0);
  const { getByText } = wrapper;
  expect(getByText("Title").textContent).toBe("Title");
});