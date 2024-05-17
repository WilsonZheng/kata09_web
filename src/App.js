import React from "react";
import TableComponent from "./components/Table.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <CartProvider>
                <TableComponent />
            </CartProvider>
        </QueryClientProvider>
    );
}

export default App;
