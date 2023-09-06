import { ListGroup } from "react-bootstrap";

function GroupListing({ itemsList }) {
 
    return (
    <ListGroup>
        {itemsList.map(item => {
            return (
                <ListGroup.Item key={item}>{item}</ListGroup.Item>
            );
        })}
    </ListGroup>
    );
}

export default GroupListing;