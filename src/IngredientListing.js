import { ListGroup, Button } from "react-bootstrap";

function IngredientListing({ itemsList, handleAddIngredient }) {
 
    return (
    <ListGroup>
        {itemsList.map(item => {
            return (
                <ListGroup.Item key={item}>
                    <Button id={item} size="sm" variant="success" onClick={handleAddIngredient}>+</Button>
                    {' '}{item}
                </ListGroup.Item>
            );
        })}
    </ListGroup>
    );
}

export default IngredientListing;