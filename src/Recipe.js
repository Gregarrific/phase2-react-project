import { Card, Accordion, Button } from "react-bootstrap";
import GroupListing from "./GroupListing";

function Recipe({ recipe, border, saveRecipe }) {

    return (
    <Card style={{ width: '30rem' }} border={border} className="mb-2">
        <Card.Header>{recipe.name.toUpperCase()}</Card.Header>
        <Card.Body>
            {/* <Card.Text>{recipe.description}</Card.Text> */}
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>INGREDIENTS</Accordion.Header>
                    <Accordion.Body>
                        <GroupListing itemsList={recipe.ingredients}    />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>DIRECTIONS</Accordion.Header>
                    <Accordion.Body>
                        <GroupListing itemsList={recipe.steps} />
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