import React from "react";
import { TableCell, TableRow, Button } from "@mui/material";

export const ItemRow = ({ item, addToCart }) => (
    <TableRow key={item.id}>
        <TableCell component="th" scope="row">
            {item.id}
        </TableCell>
        <TableCell align="left">{item.unitPrice}</TableCell>
        <TableCell align="left">{item.specialPrice}</TableCell>
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
);
