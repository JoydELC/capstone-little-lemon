import { render, screen } from "@testing-library/react";
import BookingForm from "../comp/BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Choose Date:");
  expect(headingElement).toBeInTheDocument();
});