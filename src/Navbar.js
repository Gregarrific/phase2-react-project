import { NavLink } from "react-router-dom"
import { Button } from "react-bootstrap";

function Navbar() {
    return (
        <nav>
            <NavLink to="/recipes">
                <Button>Recipes</Button>
            </NavLink>{' '}
            <NavLink to="/saved-recipes"><Button>Saved Recipes</Button></NavLink>{' '}
            <NavLink to="/grocery-list"><Button>Grocery List</Button></NavLink>{' '}
        </nav>
    );

}

export default Navbar;