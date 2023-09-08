import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Navbar from './Navbar';
import RecipeList from './RecipeList';
import RecipeBox from './RecipeBox';
import GroceryList from './GroceryList';

function App() {

  const [recipeList, setRecipeList] = useState([]);

  useEffect( () => {
    fetch('http://localhost:3010/recipes')
      .then( response => response.json())
      .then( data => setRecipeList(data));
  }, [])

  function handleSave(recipeID, status) {
    fetch(`http://localhost:3010/recipes/${recipeID}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        },
      method: 'PATCH',
      body: JSON.stringify({
        favorite: status
      })
    })
    .then (response => response.json())
    .then ( data => console.log(data));
  }

  return (
    <div>
          <Navbar />
          <Routes>
            <Route path="/recipes" element={<RecipeList recipes={recipeList} handleSave={handleSave} />} />
            <Route path="/favorites" element={<RecipeBox recipes={recipeList} />} />
            <Route path="/grocery-list" element={<GroceryList />} />
          </Routes>
    </div>
  );
}

export default App;