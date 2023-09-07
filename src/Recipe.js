import { Card, Accordion, Button } from "react-bootstrap";
import GroupListing from "./GroupListing";

function Recipe({ recipe, border }) {

    return (
    <Card style={{ width: '35rem' }} border={border} className="mb-2">
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
            <Button variant="outline-primary" href={recipe.url} size="sm">Original Source</Button>
        </Card.Body>
    </Card>
    );
}

export default Recipe;