import { ListGroup } from "react-bootstrap";

function StepListing({ itemsList }) {
 
    // Create item listing as an ordered list for the steps in each recipe
    return (
    <ListGroup numbered as="ol">
        {itemsList.map(item => {
            return (
                <ListGroup.Item key={item} as="li">{item}</ListGroup.Item>
            );
        })}
    </ListGroup>
    );
}

export default StepListing;