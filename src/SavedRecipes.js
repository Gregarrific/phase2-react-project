import Recipe from "./Recipe";
import { Row, Col } from "react-bootstrap";

function SavedRecipes({recipes, handleSave, handleAddIngredient}) {

    // Gets id from button onClick and passes variables up to handleSave function in App
    function saveRecipe(e) {
        const data = e.target.id.split("-");
        const recipeID = data[1];
        const status = (data[0] === "T" ? true : false);
        handleSave(recipeID, status);
    }

    // Passes item variable up to App for handleAddIngredient function
    function addIngredient(item) {
        handleAddIngredient(item);
    }

    return (
        <div>
        <h1>Saved Recipes</h1>
        <Row xs={1} md={1} className="g-4">
        {recipes.filter( item => item.favorite)
        .map( (recipe, index) => {
            return (
                <Col md={'auto'} key={index}>
                <Recipe key={recipe.id} recipe={recipe} border="danger" saveRecipe={saveRecipe} addIngredient={addIngredient} />
                </Col>
            );
        })}
        </Row>
        </div>
    )
}

export default SavedRecipes;