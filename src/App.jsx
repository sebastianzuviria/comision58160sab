import './App.css'

// const Layout = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       {props.children.map()}
//     </div>
//   )
// }

// function App() {
//   return (
//     <>
//       <Layout title={'pagina1'}>
//         <p>Esto es un parrafor</p>
//       </Layout>
//       <Layout title={'pagina2'}>
//           <p>Esto es un parrafo2</p>
//           <p>Esto es un parrafo3</p>
//           <p>Esto es un parrafo4</p>
//       </Layout>
//     </>
//   )
// }

// export default App


// import { useRef } from 'react'

// const App = () => {
//   const myRef = useRef(100)
//   console.log(myRef)
//   myRef.current = 50
//   console.log(myRef)

//   return (
//     <>
//       <h1>hola</h1>
//     </>
//   )
// }

// export default App

// import { useState, useEffect } from 'react'

// const Count = () => {
//   const [count, setCount] = useState(0)
  
//   useEffect(() => {
//     console.log('accion')
//     document.title = 'El valor del contador es: ' + count

//    return () => {
//     console.log('limpieza')
//     document.title = 'Vite + React'
//    }
//   }, [count])

//   const increment = () => {
//     setCount(count => count + 1)
//   }

//   console.log('render')

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>Incrementar</button>
//     </div>
//   )
// }

// const App = () => {
//   const [show, setShow] = useState(false)

//   return (
//     <>
//       <h1>hola</h1>
//       <button onClick={() => setShow(prev => !prev)}>mostra/no mostrar contador</button>
//       {show ? <Count /> : null }
//     </>
//   )
// }

// export default App

// import { useState, useEffect } from 'react'

// const ContadorDeVueltas = () => {
//   const [vuelta, setVuelta] = useState(0)
//   const [tiempoEnSegundos, setTiempoEnSegundos] = useState(0)
//   const [ultimaVuelta, setUltimaVuelta] = useState({
//     vuelta: 0,
//     tiempo: 0
//   })

//   useEffect(() => {
//     document.title = 'Vuelta: ' + vuelta

//     return () => {
//       document.title = 'Vite + React'
//     }
//   }, [vuelta])

//   useEffect(() => {
//     setTiempoEnSegundos(0)
//     const intervalId = setInterval(() => setTiempoEnSegundos(prev => prev + 1), 1000)
    
//     return () => clearInterval(intervalId)
//   }, [vuelta])

//   const finalizarVuelta = () => {
//     setUltimaVuelta({ vuelta: vuelta, tiempo: tiempoEnSegundos})
//     setVuelta(prev => prev + 1)
//   }

//   return (
//     <>
//       <h1>Contador de Vueltas</h1>
//       <h2>Tiempo en Seg: {tiempoEnSegundos}</h2>
//       <h2>Vuelta: {vuelta}</h2>
//       <button onClick={finalizarVuelta}>Finalizar Vuelta</button>
//       <div>
//          <h2>Datos ultima vuelta</h2>
//          <h3>Vuelta: {ultimaVuelta.vuelta}</h3>
//          <h3>Tiempo: {ultimaVuelta.tiempo}</h3>
//       </div>
//     </>
//   )
// }



// const App = () => {
//   const [show, setShow] = useState(true)

//   return (
//     <>
//       <h1>hola</h1>
//       <button onClick={() => setShow(prev => !prev)}>mostra/no mostrar contador</button>
//       {show ? <ContadorDeVueltas /> : null }
//     </>
//   )
// }

// export default App

// import ItemListContainer from './components/ItemListContainer/ItemListContainer'

// const App = () => {
//   return (
//     <ItemListContainer greeting={'Bienvenidos'}/>
//   )
// }

// export default App