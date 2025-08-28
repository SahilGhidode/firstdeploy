import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Login from "./Pages/Login"
import SingleUser from "./Pages/SIngleUser";
import User from "./Pages/User"
import Notfound from "./Pages/Notfound";
import PrivateRoute from "./Pages/PrivateRoute";
export default function AllRoutes() {
    return (
        <div style={
            {
                textAlign: "center"
            }
        }>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user" element={
                    <PrivateRoute>
                        <User />
                    </PrivateRoute>
                } />
                <Route path="/user/:user_id" element={<SingleUser />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </div>
    )
}