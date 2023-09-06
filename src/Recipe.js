import { Card, Accordion, Button } from "react-bootstrap";
import GroupListing from "./GroupListing";

function Recipe({ recipe }) {
    const recipeSteps = recipe.steps;
    console.log(recipe.steps);

    return (
    <Card style={{ width: '60rem' }}>
      <Card.Body>
        <Card.Title>{recipe.name.toUpperCase()}</Card.Title>
        <Card.Text>{recipe.description}</Card.Text>
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
        <Button variant="primary" href={recipe.source} size="sm">Source</Button>
      </Card.Body>
    </Card>
    );
}

export default Recipe;