import { useEffect, useState } from "react"

const usePurchase = () => {
    const [purchase, setPurchase] = useState([]);

    useEffect(() => {
        fetch('https://immense-shore-60421.herokuapp.com/purchase')
            .then(res => res.json())
            .then(data => setPurchase(data));
    }, []);
    return [purchase, setPurchase]
}
export default usePurchase;