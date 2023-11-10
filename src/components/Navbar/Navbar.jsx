import classes from './Navbar.module.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, useNavigate } from 'react-router-dom'

import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const categoriesRef = query(collection(db, 'categories'), orderBy('order'))
        
        getDocs(categoriesRef)
            .then(querySnapshot => {
                const categoriesAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields}
                })

                setCategories(categoriesAdapted)
            })
    }, [])

    return (
        <nav className={classes.container}>
            <h1 onClick={() => navigate('/')}>Ecommerce</h1>
            <section>
                {
                    categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive }) => isActive ? classes.active : ''}>{cat.name}</NavLink>)
                }
            </section>
            <CartWidget />
        </nav>
    )
} 

export default Navbar