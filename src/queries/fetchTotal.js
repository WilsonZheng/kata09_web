import axios from "axios";

export const fetchTotal = async (cartItems) => {
    const apiUrl = "https://3eacc288baa8bb25049ec4b91759f75f.serveo.net";
    // http://localhost:5000
    const response = await axios.get(
        `${apiUrl}/v1/checkout?items=${cartItems.join("")}`
    );
    return response.data;
};
