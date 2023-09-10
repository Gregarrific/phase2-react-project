import { ListGroup, Button } from "react-bootstrap";

function IngredientListing({ itemsList }) {
 
    return (
    <ListGroup>
        {itemsList.map(item => {
            return (
                <ListGroup.Item key={item}>
                    <Button size="sm" variant="success">+</Button>
                    {' '}{item}
                </ListGroup.Item>
            );
        })}
    </ListGroup>
    );
}

export default IngredientListing;