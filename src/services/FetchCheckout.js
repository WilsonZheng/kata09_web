import axios from "axios";

export const fetchCheckout = async (cartItems) => {
    // http://localhost:5000
    const apiUrl = "https://wilsonz.serveo.net";
    // TODO: Define API response data structure
    const response = await axios.get(
        `${apiUrl}/v1/checkout?items=${cartItems.join("")}`
    );
    return response.data;
};
