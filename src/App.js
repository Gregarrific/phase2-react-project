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

  return (
    <div>
          <Navbar />
          <Routes>
            <Route path="/recipes" element={<RecipeList recipes={recipeList} />} />
            <Route path="/favorites" element={<RecipeBox recipes={recipeList} />} />
            <Route path="/grocery-list" element={<GroceryList />} />
          </Routes>
    </div>
  );
}

export default App;