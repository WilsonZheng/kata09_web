import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { CartContext } from "../contexts/CartContext";
import TableComponent from "./Table.jsx";
import { useQuery } from "react-query";

jest.mock("react-query", () => ({
    useQuery: jest.fn(),
}));

jest.mock("../services/FetchCheckout.js", () => ({
    fetchTotal: jest.fn(),
}));

describe("TableComponent", () => {
    const addToCart = jest.fn();
    const clearCart = jest.fn();

    it("renders items correctly", () => {
        // arrange
        useQuery.mockImplementation(() => ({
            data: { total: 0 },
            isLoading: false,
            isError: false,
        }));
        // act
        render(
            <CartContext.Provider value={{ cart: ["A"], addToCart, clearCart }}>
                <TableComponent />
            </CartContext.Provider>
        );
        // assert
        expect(screen.getByText("A")).toBeInTheDocument();
        expect(screen.getByText("$0.5")).toBeInTheDocument();
        expect(screen.getByText("3 for $1.3")).toBeInTheDocument();
        expect(screen.getByText("Total($): 0")).toBeInTheDocument();
    });

    it("displays loading state", () => {
        // arrange
        useQuery.mockImplementation(() => ({
            isLoading: true,
            isError: false,
        }));
        // act
        render(
            <CartContext.Provider value={{ cart: [], addToCart, clearCart }}>
                <TableComponent />
            </CartContext.Provider>
        );
        // assert
        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it("displays error state", () => {
        // arrange
        useQuery.mockImplementation(() => ({
            isLoading: false,
            isError: true,
        }));
        // act
        render(
            <CartContext.Provider value={{ cart: [], addToCart, clearCart }}>
                <TableComponent />
            </CartContext.Provider>
        );
        // assert
        expect(
            screen.getByText("Error fetching checkout total")
        ).toBeInTheDocument();
    });

    it("calls addToCart when add button is clicked", () => {
        // arrange
        useQuery.mockImplementation(() => ({
            data: { total: 10 },
            isLoading: false,
            isError: false,
        }));
        // act
        render(
            <CartContext.Provider value={{ cart: [], addToCart, clearCart }}>
                <TableComponent />
            </CartContext.Provider>
        );
        const addButtons = screen.getAllByText("Add");
        fireEvent.click(addButtons[0]);
        // assert
        expect(addToCart).toHaveBeenCalledWith("A");
    });
});
