import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
} from "@mui/material";
import { useQuery } from "react-query";
import { fetchTotal } from "../queries/fetchTotal.js";

const items = [
    { id: "A", unitPrice: 50, specialPrice: "3 for 130" },
    { id: "B", unitPrice: 30, specialPrice: "2 for 45" },
    { id: "C", unitPrice: 20, specialPrice: null },
    { id: "D", unitPrice: 15, specialPrice: null },
];

const TableComponent = () => {
    const { cart, addToCart, clearCart } = useContext(CartContext);

    const { data, isLoading, isError } = useQuery(
        ["checkoutTotal", cart],
        () => fetchTotal(cart),
        {
            enabled: !!cart.length,
        }
    );

    return (
        <TableContainer
            component={Paper}
            style={{ maxWidth: "500px", margin: "50px" }}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Item</TableCell>
                        <TableCell align="left">Unit Price</TableCell>
                        <TableCell align="left">Special Price</TableCell>
                        <TableCell align="left">Add to Cart</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell component="th" scope="row">
                                {item.id}
                            </TableCell>
                            <TableCell align="left">{item.unitPrice}</TableCell>
                            <TableCell align="left">
                                {item.specialPrice}
                            </TableCell>
                            <TableCell align="left">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => addToCart(item.id)}
                                >
                                    Add
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div style={{ margin: "10px" }}>Items in the cart: {cart}</div>

            <div style={{ margin: "10px" }}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : isError ? (
                    <p>Error fetching total</p>
                ) : (
                    <p>Total: {data ? data.total : 0}</p>
                )}
            </div>
            <div style={{ margin: "10px" }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => clearCart()}
                >
                    Clear
                </Button>
            </div>
        </TableContainer>
    );
};

export default TableComponent;
