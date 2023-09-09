import Recipe from "./Recipe";
import { Row, Col } from "react-bootstrap";

function RecipeBox({recipes, handleSave}) {

    function saveRecipe(e) {
        const data = e.target.id.split("-");
        const recipeID = data[1];
        const status = (data[0] === "T" ? true : false);
        handleSave(recipeID, status);
    }

    return (
        <div>
        <h1>Saved Recipes</h1>
        <Row xs={1} md={1} className="g-4">
        {recipes.filter( item => item.favorite)
        .map( (recipe, index) => {
            return (
                <Col md={'auto'} key={index}>
                <Recipe key={recipe.id} recipe={recipe} border="danger" saveRecipe={saveRecipe} />
                </Col>
            );
        })}
        </Row>
        </div>
    )
}

export default RecipeBox;