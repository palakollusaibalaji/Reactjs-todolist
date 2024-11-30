import { useState } from "react"

const useSai = () => {

    const [count,setCount] = useState(0);

    const handleIncreament = () => {
        setCount(count + 1);
    };

    const handleDecreament = () => {
        setCount(count - 1);
    };

    return handleDecreament,handleIncreament;
}

export default useSai;