import { render, screen, waitFor } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import Shop from "./Shop";
import * as api from "../services/api";

vi.mock("../services/api");

test("renders products from API", async () => {
  // Mock API to return test products
  vi.mocked(api.getProducts).mockResolvedValue([
    { id: 1, title: "Test Product 1", price: 10, image: "test1.jpg" },
    { id: 2, title: "Test Product 2", price: 20, image: "test2.jpg" },
  ]);

  render(<Shop onAddToCart={vi.fn()} />);

  // Wait for products to appear
  await waitFor(() =>
    expect(screen.getByText("Test Product 1")).toBeInTheDocument(),
  );

  expect(screen.getByText("Test Product 2")).toBeInTheDocument();
});

test("calls onAddToCart when Add button is clicked", async () => {
  vi.mocked(api.getProducts).mockResolvedValue([
    { id: 1, title: "Test Product 1", price: 10, image: "test1.jpg" },
  ]);

  const onAddToCart = vi.fn();

  render(<Shop onAddToCart={onAddToCart} />);

  const addButton = await screen.findByText("Add to Cart");
  addButton.click();

  expect(onAddToCart).toHaveBeenCalledWith(
    { id: 1, title: "Test Product 1", price: 10, image: "test1.jpg" },
    1,
  );
});
