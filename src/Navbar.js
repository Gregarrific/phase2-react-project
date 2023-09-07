import { Link } from "react-router-dom"
import { Button } from "react-bootstrap";

function Navbar() {
    return (
        <nav>
            <Link to="/recipes"><Button variant="primary">Recipes</Button></Link>{' '}
            <Link to="/favorites"><Button variant="primary">Saved Recipes</Button></Link>{' '}
            <Link to="/grocery-list"><Button variant="primary">Grocery List</Button></Link>{' '}
        </nav>
    );

}

export default Navbar;