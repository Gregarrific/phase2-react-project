import { NavLink } from "react-router-dom"
import { Button } from "react-bootstrap";

function Navbar() {
    return (
        <nav>
            <NavLink exact to="/">
                <Button>Home</Button>
            </NavLink>{' '}
            <NavLink to="/recipes">
                <Button>Recipe Finder</Button>
            </NavLink>{' '}
            <NavLink to="/saved-recipes"><Button>Saved Recipes</Button></NavLink>{' '}
            <NavLink to="/grocery-list"><Button>Grocery List</Button></NavLink>{' '}
        </nav>
    );

}

export default Navbar;