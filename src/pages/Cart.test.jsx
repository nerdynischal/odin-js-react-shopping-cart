import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, vi, expect } from "vitest";
import Cart from "./Cart";

const mockCart = [
  { id: 1, product: { title: "Product A", price: 10 }, quantity: 2 },
  { id: 2, product: { title: "Product B", price: 20 }, quantity: 1 },
];

test("displays cart items and total correctly", () => {
  render(
    <Cart
      cart={mockCart}
      updateQuantity={() => {}}
      removeFromCart={() => {}}
    />,
  );

  // Items visible
  expect(screen.getByText("Product A")).toBeInTheDocument();
  expect(screen.getByText("Product B")).toBeInTheDocument();

  // Total price
  expect(screen.getByText("Total: $40.00")).toBeInTheDocument();
});

test("calls updateQuantity on + button click", async () => {
  const mockUpdate = vi.fn();

  render(
    <Cart
      cart={mockCart}
      updateQuantity={mockUpdate}
      removeFromCart={() => {}}
    />,
  );

  const incrementBtns = await screen.findAllByText("+");
  await userEvent.click(incrementBtns[0]);

  expect(mockUpdate).toHaveBeenCalledWith(1, 3); // 2 + 1
});

test("calls updateQuantity on - button click", async () => {
  const mockUpdate = vi.fn();

  render(
    <Cart
      cart={mockCart}
      updateQuantity={mockUpdate}
      removeFromCart={() => {}}
    />,
  );

  const decrementBtns = await screen.findAllByText("-");
  await userEvent.click(decrementBtns[0]);

  expect(mockUpdate).toHaveBeenCalledWith(1, 1); // 2 - 1
});

test("calls removeFromCart on Remove button click", async () => {
  const mockRemove = vi.fn();

  render(
    <Cart
      cart={mockCart}
      updateQuantity={() => {}}
      removeFromCart={mockRemove}
    />,
  );

  const removeBtns = await screen.findAllByText("Remove");
  await userEvent.click(removeBtns[0]);

  expect(mockRemove).toHaveBeenCalledWith(1);
});

test("shows empty cart message", () => {
  render(
    <Cart cart={[]} updateQuantity={() => {}} removeFromCart={() => {}} />,
  );

  expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
});
