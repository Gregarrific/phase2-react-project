import { Table, Button, Card } from "react-bootstrap";

function GroceryList({ groceryList, handlePurchase, handleDelete }) {
   // Sort the grocery list so that purchased items are at the bottom of the list
   groceryList.sort(function(a, b) {
      return a.complete - b.complete;
   });

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
               {groceryList.map( groceryItem => {
                  return (
                     <tr key={groceryItem.id}>
                        { groceryItem.complete ? 
                           <td><Button 
                              variant="success" size="sm"
                              onClick={handlePurchase} id={`Y-${groceryItem.id}`}>
                                 Yes
                              </Button>
                           </td> :
                           <td><Button 
                              variant="outline-success" size="sm" 
                              onClick={handlePurchase} id={`N-${groceryItem.id}`}>
                                 No</Button>
                           </td>
                        }
                        <td className={groceryItem.complete ? "purchased" : "not-complete"}>{groceryItem.item.toUpperCase()}</td>
                        <td><Button id={groceryItem.id}
                           variant="outline-danger" size="sm" onClick={handleDelete}>x
                        </Button></td>
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