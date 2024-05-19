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
import { useCheckout } from "../hooks/UseCheckout.js";
import { ItemRow } from "./ItemRow";
import { Total } from "./Total.jsx";
import "./TableComponent.css";
import { Products } from "../services/GetProducts.js";
const TableComponent = () => {
    const { cart, addToCart, clearCart } = useContext(CartContext);
    const { data, isLoading, isError } = useCheckout(cart);

    return (
        <TableContainer component={Paper} className="tableContainer">
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
                    {Products.map((item) => (
                        <ItemRow
                            key={item.id}
                            item={item}
                            addToCart={addToCart}
                        />
                    ))}
                </TableBody>
            </Table>
            <div className="infoText">Items in the cart: {cart}</div>
            <Total isLoading={isLoading} isError={isError} data={data} />
            <div className="infoText">
                <Button variant="contained" color="primary" onClick={clearCart}>
                    Clear
                </Button>
            </div>
        </TableContainer>
    );
};

export default TableComponent;
