import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={'Estos son todos nuestros productos'}/>
    </>
  )
}

export default App
