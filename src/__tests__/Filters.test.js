import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Filters from "../components/Filters";

const FILTERS_STATE = { type: "all" };

describe("Filters component", () => {
  it("calls the `onFindPetsClick` prop callback when the Find pets button is clicked", () => {
    const onFindPetsClick = jest.fn();
    render(<Filters onFindPetsClick={onFindPetsClick} filters={FILTERS_STATE} />);
    const button = screen.getByText(/Find pets/); // Remove global 'g' flag
    fireEvent.click(button);
    expect(onFindPetsClick).toHaveBeenCalled();
  });

  it("calls the `onChangeType` prop callback when the animal type select changes", () => {
    const onChangeType = jest.fn();
    render(<Filters onChangeType={onChangeType} filters={FILTERS_STATE} />);
    const select = screen.getByLabelText("Animal type"); // Update the label to match your component
    fireEvent.change(select, { target: { value: "dog" } });
    expect(onChangeType).toHaveBeenCalled();
  });
});