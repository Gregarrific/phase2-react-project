import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";

function Navbar() {
    //Set state for active navigation link
    const [activeLink, setActiveLink] = useState(0);

    //Updates state of clicked navigation link
    function handleButton(e) {
        setActiveLink(parseInt(e.target.id));
    }

    return (
        <nav>
            <NavLink exact="true" to="/">
                <Button id="0" onClick={handleButton}
                variant={(activeLink === 0 ? "primary" : "outline-primary")}>
                    Home
                </Button>
            </NavLink>{' '}
            <NavLink to="/recipes">
                <Button id="1" onClick={handleButton}
                variant={(activeLink === 1 ? "primary" : "outline-primary")}>
                    Recipe Finder
                </Button>
            </NavLink>{' '}
            <NavLink to="/saved-recipes">
                <Button id="2" onClick={handleButton}
                variant={(activeLink === 2 ? "primary" : "outline-primary")}>
                    Saved Recipes
                </Button>
            </NavLink>{' '}
            <NavLink to="/grocery-list">
                <Button id="3" onClick={handleButton}
                variant={(activeLink === 3 ? "primary" : "outline-primary")}>
                    Grocery List
                </Button>
            </NavLink>{' '} 
        </nav>
    );

}

export default Navbar;