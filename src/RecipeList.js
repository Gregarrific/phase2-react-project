import Recipe from "./Recipe";

function RecipeList({ recipes }) {
    return (
        <div>
        <h1>Recipes</h1>
        {recipes.map( recipe => {
            return (
                <Recipe key={recipe.id} recipe={recipe} />
            );
        })}
        </div>
    )
}

export default RecipeList;