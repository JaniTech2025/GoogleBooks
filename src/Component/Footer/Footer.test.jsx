import userEvent from '@testing-library/user-event';
import { render, screen } from "@testing-library/react";
import Footer from "./Footer"; // adjust path as needed

describe("Footer", () => {
  const user = userEvent.setup();
  const inpText = "Hello";
  test("renders footer text", () => {
    render(<Footer text={inpText}/>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
