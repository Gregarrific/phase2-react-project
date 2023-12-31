import { Accordion, Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import StepListing from "./StepListing";

function RecipeResult({ recipe, border, saveRecipe }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
        <Button variant="outline-primary" onClick={handleShow} size="sm">
            View Recipe
        </Button>{' '}
        {recipe.name.toUpperCase()}

        <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>{recipe.name.toUpperCase()}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <p>{recipe.description}</p>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>INGREDIENTS</Accordion.Header>
                    <Accordion.Body>
                        <StepListing itemsList={recipe.ingredients} />
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
            {'  '}<Button variant="outline-primary" href={recipe.url} target="_blank" size="sm">Recipe Source</Button>
            </Offcanvas.Body>
        </Offcanvas>
    </>
    );
}

export default RecipeResult;