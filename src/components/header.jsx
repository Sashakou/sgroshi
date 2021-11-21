import {BrowserRouter, NavLink, Route} from "react-router-dom";
import {useState, useEffect} from 'react';
import App from "../App";
import Login from "./login/Login";
import Inquiries from "./Inquiries/Inquiries";
import InputPage from "./InputPage/InputPage";

function Header() {
    const [count, setCount] = useState(0);
    const setActive = ({ isActive }) =>(isActive ? " active" : "");
    return (
        <header>
            <nav>
                <ul className="navbar">
                    {/*<li className="navItem">*/}
                    {/*    <NavLink to="/login" className={setActive}>login</NavLink>*/}
                    {/*</li>*/}
                    <li className="navItem">
                        <NavLink to="/inputPage" className={setActive}>InputPage</NavLink>
                    </li>
                    <li className="navItem">
                        <NavLink to="/inquiries" className={setActive}>Inquiries</NavLink>
                    </li>
                </ul>
            </nav>

            {/*<button onClick={() => setCount(count + 1)}>*/}
            {/*    Click me*/}
            {/*</button>*/}
            {/*<p>You clicked {count} times</p>*/}
        </header>
    );
}
export default Header;
