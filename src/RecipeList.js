import RecipeResult from "./RecipeResult";
import { Row, Col, ListGroup } from "react-bootstrap";

function RecipeList({ recipes, handleSave }) {

    function saveRecipe(e) {
        const data = e.target.id.split("-");
        const recipeID = data[1];
        const status = (data[0] === "T" ? true : false);
        handleSave(recipeID, status);
    }

    return (
        <div>
        <h1>Recipes</h1>
{/*         <Row xs={1} md={1} className="g-4">
        {recipes.map( (recipe, index) => {
            return (
                <Col md={'auto'} key={index}>
                <RecipeResult key={recipe.id} recipe={recipe} border="primary" saveRecipe={saveRecipe} />
                </Col>
            );
        })}
        </Row> */}
            <ListGroup>
            {recipes.map( (recipe, index) => {
                return (
                    <ListGroup.Item>
                        <RecipeResult key={recipe.id} recipe={recipe} border="primary" saveRecipe={saveRecipe} />
                    </ListGroup.Item>
                )})}
            </ListGroup>
        </div>
    )
}

export default RecipeList;