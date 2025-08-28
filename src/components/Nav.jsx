import { Link, NavLink } from "react-router-dom"

export default function Nav() {

    const Linkes = [
        { path: "/", title: "Home" },
        { path: "/about", title: "About" },
        { path: "/contact", title: "Contact" },
        { path: "/login", title: "Login" },
        { path: "/user", title: "User" }
    ]

    const ActiveStyle = { textDecoration: "none", color: "red" }
    const InActiveStyle = { textDecoration: "none", color: "blue" }

    return (

        // method 1
        <div style={{
            display: "flex",
            justifyContent: "space-around"
        }}>
            {/*  method 1 
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/user"}>User</Link> */}

            {Linkes.map(({ path, title })=>(
            <NavLink
                style={({ isActive }) => {
                    return (isActive) ? ActiveStyle : InActiveStyle;
                }}
                to={path}>
                {title}
            </NavLink>
            ))}
        </div>



        // method 2



    )
}