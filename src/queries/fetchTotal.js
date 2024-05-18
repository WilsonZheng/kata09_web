import axios from "axios";

export const fetchTotal = async (cartItems) => {
    const response = await axios.get(
        `${
            process.env.API_URL ?? "http://localhost:5000"
        }/v1/checkout?items=${cartItems.join("")}`
    );
    return response.data;
};
