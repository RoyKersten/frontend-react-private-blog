import React from 'react';
import {NavLink, useHistory} from "react-router-dom";

function Header({authenticated, setAuthenticated}) {

    const history = useHistory();

    function logout() {
        setAuthenticated(false);
        history.push("/");
        console.log("user is uitgelogd: "+authenticated);
    }

    if (authenticated) {
        return (
            <nav>
                <div className="nav-container">
                    <ul className="header">
                        <li>
                            <NavLink className="nav-link" to="/" exact activeClassName="active-link">Home</NavLink>
                        </li>

                        <li>
                            <NavLink className="nav-link" to="/blogposts" exact
                                     activeClassName="active-link">Blogposts</NavLink>
                        </li>

                        <li>
                            <button type="button" onClick={() => logout()}>Uitloggen</button>

                        </li>
                    </ul>
                </div>
            </nav>
        );
    } else {
        return (
            <nav>
                <div className="nav-container">
                    <ul className="header">
                        <li>
                            <NavLink className="nav-link" to="/" exact activeClassName="active-link">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/login" exact
                                     activeClassName="active-link">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;