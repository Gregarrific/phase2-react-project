import { Card, Accordion, Button } from "react-bootstrap";
import StepListing from "./StepListing";
import IngredientListing from "./IngredientListing";

function Recipe({ recipe, border, saveRecipe, addIngredient }) {
    
    // Get id from ingredient list item and pass the data up to addIngredient function in App
    function handleAddIngredient(e) {
        addIngredient(e.target.id);
    }

    return (
    <Card style={{ width: '30rem' }} border={border} className="mb-2">
        <Card.Header>{recipe.name.toUpperCase()}</Card.Header>
        <Card.Body>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>INGREDIENTS</Accordion.Header>
                    <Accordion.Body>
                        <IngredientListing itemsList={recipe.ingredients} handleAddIngredient={handleAddIngredient} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>DIRECTIONS</Accordion.Header>
                    <Accordion.Body>
                        <StepListing itemsList={recipe.steps} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            {recipe.favorite ?
                <Button variant="danger" size="sm" className="saved" 
                    id={`T-${recipe.id}`} onClick={saveRecipe}>
                    Saved
                </Button> :
                <Button variant="outline-primary" size="sm" 
                    id={`F-${recipe.id}`} onClick={saveRecipe}>
                    Save Receipe
                </Button>
            }
            {' '}<Button variant="outline-primary" href={recipe.url} size="sm">Source</Button>
        </Card.Body>
    </Card>
    );
}

export default Recipe;