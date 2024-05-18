import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { CartContext } from "../contexts/CartContext";
import TableComponent from "./Table.jsx";
import { useQuery } from "react-query";

jest.mock("react-query", () => ({
    useQuery: jest.fn(),
}));

jest.mock("../queries/fetchTotal.js", () => ({
    fetchTotal: jest.fn(),
}));

describe("TableComponent", () => {
    const addToCart = jest.fn();
    const clearCart = jest.fn();

    it("renders items correctly", () => {
        useQuery.mockImplementation(() => ({
            data: { total: 0 },
            isLoading: false,
            isError: false,
        }));

        render(
            <CartContext.Provider value={{ cart: ["A"], addToCart, clearCart }}>
                <TableComponent />
            </CartContext.Provider>
        );

        expect(screen.getByText("A")).toBeInTheDocument();
        expect(screen.getByText("50")).toBeInTheDocument();
        expect(screen.getByText("3 for 130")).toBeInTheDocument();
        expect(screen.getByText("Total: 0")).toBeInTheDocument();
    });

    it("displays loading state", () => {
        useQuery.mockImplementation(() => ({
            isLoading: true,
            isError: false,
        }));

        render(
            <CartContext.Provider value={{ cart: [], addToCart, clearCart }}>
                <TableComponent />
            </CartContext.Provider>
        );

        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it("displays error state", () => {
        useQuery.mockImplementation(() => ({
            isLoading: false,
            isError: true,
        }));
        render(
            <CartContext.Provider value={{ cart: [], addToCart, clearCart }}>
                <TableComponent />
            </CartContext.Provider>
        );
        expect(screen.getByText("Error fetching total")).toBeInTheDocument();
    });

    it("calls addToCart when add button is clicked", () => {
        useQuery.mockImplementation(() => ({
            data: { total: 10 },
            isLoading: false,
            isError: false,
        }));
        render(
            <CartContext.Provider value={{ cart: [], addToCart, clearCart }}>
                <TableComponent />
            </CartContext.Provider>
        );
        const addButtons = screen.getAllByText("Add");
        fireEvent.click(addButtons[0]);
        expect(addToCart).toHaveBeenCalledWith("A");
    });
});
