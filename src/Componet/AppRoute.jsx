import { Route,Routes } from "react-router-dom"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
export default function AppRoute(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
            </Routes>
        </>
    )
}