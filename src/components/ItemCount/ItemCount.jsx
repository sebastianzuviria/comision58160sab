import { useState } from "react"

const ItemCount = () => {
    let [quantity, setQuantity] = useState(0)

    const increment = () => {
        for(let i = 0; i < 5; i++) {
            // console.log(i)
            setQuantity(prev => {
                console.log(prev)
                return prev + 1
            })
            // setQuantity(quantity => quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div>
            <h1>{quantity}</h1>
            <button onClick={decrement}>decrementar</button>
            <button onClick={increment}>incremetar</button>
        </div>
    )
}

export default ItemCount