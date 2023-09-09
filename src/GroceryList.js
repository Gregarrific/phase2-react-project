import { Table, Button } from "react-bootstrap";

function GroceryList({ groceryList }) {
 return (
   <div className="grocery-list">
      <h1>Grocery List</h1>
      <Table striped bordered hover variant="dark">
         <thead>
            <tr>
               <th>DONE</th>
               <th>ITEM</th>
               <th>DELETE</th>
            </tr>
         </thead>
         <tbody>
         {groceryList.map( item => {
            return (
               <tr>
                  <td>{' '}</td>
                  <td>{item.item.toUpperCase()}</td>
                  <td><Button variant="outline-danger">X</Button></td>
               </tr>
            )
         })
         }
         </tbody>
      </Table>
    </div>
 )
}

export default GroceryList;