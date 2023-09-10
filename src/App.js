import './App.css';

import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Navbar from './Navbar';
import RecipeList from './RecipeList';
import SavedRecipes from './SavedRecipes';
import GroceryList from './GroceryList';
import Home from './Home';

function App() {
  // Create variable and function to update state of recipes
  const [recipeList, setRecipeList] = useState([]);
  const [groceryList, setGroceryList] = useState([]);

  // Use useEffect hook to load grocery list on first load only
  useEffect( () => {
    fetch('http://localhost:3010/groceries')
      .then( response => response.json())
      .then( data => setGroceryList(data));
  }, [])

  // Use useEffect hook to load recipes on first load only
  useEffect( () => {
    fetch('http://localhost:3010/recipes') //Recipe source -> https://frosch.cosy.sbg.ac.at/datasets/json/recipes
      .then( response => response.json())
      .then( data => setRecipeList(data));
  }, [])
  
  // Handles PATCH and state for grocery list purchase
  function handlePurchase(e) {
      const buttonData = e.target.id.split('-');
      //set groceryID to the id number of the grocery list item
      const groceryID = buttonData[1];
      //set isPurchased to either true or false
      const isPurchased = (buttonData[0] === "Y" ? true : false);
  
      // Use Fetch to PATCH the updated recipe information 
      fetch(`http://localhost:3010/groceries/${groceryID}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
          },
        method: 'PATCH',
        body: JSON.stringify({
          complete: !isPurchased
        })
      })
      .then (response => response.json())
      .then ( updatedGroceries => {
        console.log(updatedGroceries);
        // Find the index of the grocery list item to be updated
        const indexToUpdate = groceryList.findIndex((item) => item.id === updatedGroceries.id);
        if (indexToUpdate !== -1) {
          // Create a copy of the recipeList to avoid mutating
          const updatedGroceryList = [...groceryList];
          // Update the recipe at the correct index with the patched values recevied from fetch response
          updatedGroceryList[indexToUpdate] = updatedGroceries;
          // Update the state with the new recipeList
          setGroceryList(updatedGroceryList);
        }
      });
  }

  // Handles PATCH and state for save button
  function handleSave(recipeID, status) {
    const favStatus = !status;

    // Use Fetch to PATCH the updated recipe information 
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

    // Handles POST for adding ingredient to grocery list
    function handleAddIngredient(e) {
  
      // Use Fetch to POST new item for grocery list 
      fetch(`http://localhost:3010/groceries}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
          },
        method: 'POST',
        body: JSON.stringify({
          item: "placeholder",
          complete: false
        })
      })
      .then (response => response.json())
      .then ( updatedGroceryList => {
        console.log(updatedGroceryList);
        // Create new grocery list array with new item added
        const newGroceryList = [...groceryList, updatedGroceryList]
        console.log(newGroceryList);
        // setRecipeList(updatedRecipeList);
      });
    }

  return (
    <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" 
              element={<RecipeList recipes={recipeList} handleSave={handleSave} />} />
            <Route path="/saved-recipes" 
              element={<SavedRecipes recipes={recipeList} handleSave={handleSave} handleAddIngredient={handleAddIngredient} />} />
            <Route path="/grocery-list" 
              element={<GroceryList groceryList={groceryList} handlePurchase={handlePurchase}/>} />
          </Routes>
    </div>
  );
}

export default App;