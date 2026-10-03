import Catalogo from "./components/Catalogo"
import NavBar from "./components/NavBar"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
    <NavBar/>
    <Catalogo/>
    <Outlet/>
    </>
  )
}

export default App
