import { useEffect, useState } from "react"


const MercadoLibre = () => {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState('celulares')

    useEffect(() => {
       fetch(`https://api.mercadolibre.com/sites/MLA/search?q=celulares`)
        .then(response => {
            return response.json()
        })
        .then(json => setProducts(json.results.slice(0, 10)))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
            .then(response => {
                return response.json()
            })
            .then(json => setProducts(json.results.slice(0, 10)))
    }
    
    console.log(input)


    return (
        <>
            <h1>Mercado Libre</h1>
            <form onSubmit={handleSubmit}>
                <input value={input} onChange={(e) => setInput(e.target.value)}/>
                <button>Search</button>
            </form>
            <div>
                {
                    products.map(prod => (
                        <div key={prod.id}>
                            <h2>{prod.title}</h2>
                            <img src={prod.thumbnail}/>
                            <h3>${prod.price}</h3>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default MercadoLibre