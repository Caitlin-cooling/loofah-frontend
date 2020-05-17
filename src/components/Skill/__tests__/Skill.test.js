import { render } from "@testing-library/react";
import React from "react";
import Skill from "../Skill";

test("renders the title and description of given", () => {
  const wrapper = render(
    <Skill title="test title" description="test description" />
  );
  const { getByText } = wrapper;

  expect(getByText("test title").textContent).toEqual("test title");
  expect(getByText("test description").textContent).toEqual("test description");
});
