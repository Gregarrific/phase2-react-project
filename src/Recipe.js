import { Card, Accordion, Button } from "react-bootstrap";
import Ingredients from "./Ingredients";

function Recipe({ recipe }) {
    const [name, description, ingredients, steps, source] = recipe;

    return (
    <Card style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Ingedients</Accordion.Header>
                <Accordion.Body>
                    <Ingredients ingredientList={ingredients}/>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Directions</Accordion.Header>
                <Accordion.Body>{steps}</Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    );
}

export default Recipe;