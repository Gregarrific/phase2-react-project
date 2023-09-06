import { ListGroup } from "react-bootstrap";

function Ingredients({ ingredientList }) {
    // console.log(ingredientList);
    return (
    <ListGroup>
        {ingredientList.map(ingredient => {
            return (
                <ListGroup.Item>{ingredient}</ListGroup.Item>
            );
        })}
    </ListGroup>
    );
}

export default Ingredients;