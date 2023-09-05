import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <Link to="/recipes">Recipes</Link>
            <Link to="/favorites">Saved Recipes</Link>
            <Link to="/grocery-list">Grocery List</Link>
        </nav>
    );

}

export default Navbar;