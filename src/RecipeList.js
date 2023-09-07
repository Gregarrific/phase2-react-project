import Recipe from "./Recipe";
import { Row, Col } from "react-bootstrap";

function RecipeList({ recipes }) {
    return (
        <div>
        <h1>Recipes</h1>
        <Row xs={1} md={1} className="g-4">
        {recipes.map( (recipe, index) => {
            return (
                <Col md={'auto'} key={index}>
                <Recipe key={recipe.id} recipe={recipe} border="primary" />
                </Col>
            );
        })}
        </Row>
        </div>
    )
}

export default RecipeList;