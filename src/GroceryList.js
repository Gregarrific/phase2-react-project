import { Table, Button, Card } from "react-bootstrap";

function GroceryList({ groceryList }) {
   return (
      <div className="grocery-list">
         <h1>Grocery List</h1>
         <Card style={{ width: '45rem' }} className="mb-2">
            <Table striped bordered hover size="sm">
               <thead>
                  <tr>
                     <th>PURCHASED?</th>
                     <th>ITEM</th>
                     <th>DELETE</th>
                  </tr>
               </thead>
               <tbody>
               {groceryList.map( item => {
                  return (
                     <tr>
                        { item.complete ? 
                           <td><Button variant="success" size="sm">Yes</Button></td> :
                           <td><Button variant="outline-success" size="sm">No</Button></td>
                        }
                        <td className={item.complete ? "purchased" : "not-complete"}>{item.item.toUpperCase()}</td>
                        <td><Button variant="outline-danger" size="sm">x</Button></td>
                     </tr>
                  )
               })
               }
               </tbody>
            </Table>
         </Card>
      </div>
   )
}

export default GroceryList;