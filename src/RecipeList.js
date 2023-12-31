import RecipeResult from "./RecipeResult";
import { ListGroup } from "react-bootstrap";
import { useState } from "react";

function RecipeList({ recipes, handleSave, search, onSearchChange }) {
    // Set state variable to keep track of input text field in search
    const [recipeSearch, setRecipeSearch]=useState("");
    
    // Update the recipeSerach state variable with input typed in text field
    function onSearchChange(e) {
        setRecipeSearch(e.target.value);
    }

    // Gets id from button onClick and passes variables up to handleSave function in App
    function saveRecipe(e) {
        const data = e.target.id.split("-");
        const recipeID = data[1];
        const status = (data[0] === "T" ? true : false);
        handleSave(recipeID, status);
    }

    // Create variable to filter recipes listed by the recipeSearch state variable
    const filteredRecipes = recipes.filter( recipe => (recipe.name.toLowerCase().includes(recipeSearch)) );
    console.log(filteredRecipes);
    
    return (
        <div>
            <h1>Recipe Finder</h1>

            <input type="text" name="search" value={search} onChange={onSearchChange} placeholder="Search..." />
            <p> </p>

            <ListGroup>
                {filteredRecipes.map( recipe => {
                        return (
                            <ListGroup.Item key={recipe.id}>
                                <RecipeResult key={recipe.id} recipe={recipe} border="primary" saveRecipe={saveRecipe} />
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </div>
    )
}

export default RecipeList;