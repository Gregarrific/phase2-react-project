import { Card, Accordion, Button } from "react-bootstrap";
import Ingredients from "./Ingredients";

function Recipe({ recipe }) {

    return (
    <Card style={{ width: '70rem' }}>
      <Card.Body>
        <Card.Title>{recipe.name}</Card.Title>
        <Card.Text>{recipe.description}</Card.Text>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Ingedients</Accordion.Header>
                <Accordion.Body>
                    <Ingredients ingredientList={recipe.ingredients}/>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Directions</Accordion.Header>
                <Accordion.Body>{recipe.steps}</Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Button variant="primary" href={recipe.source} size="sm">Source</Button>
      </Card.Body>
    </Card>
    );
}

export default Recipe;