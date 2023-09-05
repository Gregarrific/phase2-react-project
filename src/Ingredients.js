import { ListGroup } from "react-bootstrap";

function Ingredients({ ingredientList }) {
    return (
    <ListGroup>
        {ingredientList.forEach(ingredient => {
            <ListGroup.Item>{ingredient}</ListGroup.Item>
        })}
    </ListGroup>
    )
}

export default Ingredients;