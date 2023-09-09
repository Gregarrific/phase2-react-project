import './App.css';

import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Navbar from './Navbar';
import RecipeList from './RecipeList';
import RecipeBox from './RecipeBox';
import GroceryList from './GroceryList';

function App() {
  // Create variable and function to update state of recipes
  const [recipeList, setRecipeList] = useState([]);

  // Use useEffect hook to load recipes on firt load only
  useEffect( () => {
    fetch('http://localhost:3010/recipes')
      .then( response => response.json())
      .then( data => setRecipeList(data));
  }, [])
  
  // Handles Patch and state for save button
  function handleSave(recipeID, status) {
    const favStatus = !status;

    // Use Fetch to patch the updated recipe information 
    fetch(`http://localhost:3010/recipes/${recipeID}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        },
      method: 'PATCH',
      body: JSON.stringify({
        favorite: favStatus
      })
    })
    .then (response => response.json())
    .then ( updatedRecipe => {
      console.log(updatedRecipe);
      // Find the index of the recipe to be updated
      const indexToUpdate = recipeList.findIndex((recipe) => recipe.id === updatedRecipe.id);
      if (indexToUpdate !== -1) {
        // Create a copy of the recipeList to avoid mutating
        const updatedRecipeList = [...recipeList];
        // Update the recipe at the correct index with the patched values recevied from fetch response
        updatedRecipeList[indexToUpdate] = updatedRecipe;
        // Update the state with the new recipeList
        setRecipeList(updatedRecipeList);
      }
    });
  }

  return (
    <div>
          <Navbar />
          <Routes>
            <Route path="/recipes" element={<RecipeList recipes={recipeList} handleSave={handleSave} />} />
            <Route path="/favorites" element={<RecipeBox recipes={recipeList} handleSave={handleSave} />} />
            <Route path="/grocery-list" element={<GroceryList />} />
          </Routes>
    </div>
  );
}

export default App;