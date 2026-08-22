import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio application", () => {
  render(<App />);

  expect(document.querySelector(".App")).toBeInTheDocument();
});