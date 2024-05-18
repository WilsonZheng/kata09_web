import axios from "axios";

export const fetchTotal = async (cartItems) => {
    const apiUrl = "https://9b44d6266d61e8ef3295281e24f96751.serveo.net";
    // http://localhost:5000
    const response = await axios.get(
        `${apiUrl}/v1/checkout?items=${cartItems.join("")}`
    );
    return response.data;
};
