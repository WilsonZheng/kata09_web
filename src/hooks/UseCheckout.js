import { useQuery } from "react-query";
import { fetchCheckout } from "../services/FetchCheckout.js";

export const useCheckout = (cart) =>
    useQuery(["checkoutTotal", cart], () => fetchCheckout(cart), {
        enabled: !!cart.length,
        cacheTime: 60 * 1000, // 1 min
        refetchInterval: 5 * 60 * 1000, // 5 mins
    });
