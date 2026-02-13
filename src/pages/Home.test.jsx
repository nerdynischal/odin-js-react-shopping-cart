import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Home from "./Home";

test("renders welcome message", () => {
  render(<Home />);
  const heading = screen.getByRole("heading", { level: 2 });
  expect(heading).toHaveTextContent(/welcome/i);
});
