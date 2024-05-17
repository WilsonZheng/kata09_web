import axios from "axios";

export const fetchTotal = async (cartItems) => {
    const response = await axios.get(
        `http://localhost:5000/v1/checkout?items=${cartItems.join("")}`
    );
    return response.data;
};
