import { createContext } from "react";

const count = 0;
const formattedCount = count.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
})

export const CartContext = createContext({
    count: formattedCount,
    setCount: () => {}
});