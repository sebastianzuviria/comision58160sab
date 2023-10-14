import { useCount } from "../../hooks/useCount"

const ItemCount = () => {
    const { count, decrement, increment } = useCount(2)
    const { count: count2, decrement: decrement2, increment: increment2 } = useCount(10)

    return (
        <>
            <h1>{count}</h1>
            <button onClick={decrement}>decrement</button>
            <button onClick={increment}>increment</button>

            <h1>{count2}</h1>
            <button onClick={decrement2}>decrement</button>
            <button onClick={increment2}>increment</button>
        </>
    )
}

export default ItemCount