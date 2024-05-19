import React from "react";
import { CartProvider } from "./contexts/CartContext.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import HomeView from "./views/home.js";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <CartProvider>
                <HomeView />
            </CartProvider>
        </QueryClientProvider>
    );
}

export default App;
