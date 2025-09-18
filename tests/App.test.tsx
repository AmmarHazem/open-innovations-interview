import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";

describe("App", () => {
  it("should render the App component", async () => {
    render(<App />);
    const countButton = screen.getByRole("button", { name: "0" });
    expect(countButton).toBeInTheDocument();
    const user = userEvent.setup();
    await user.click(countButton);
    await user.click(countButton);
    expect(countButton).toHaveTextContent("2");
  });
});
