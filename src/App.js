import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import RecipeList from './RecipeList';
import RecipeBox from './RecipeBox';

function App() {
  return (
    <div className="App">
          Phase 2 React Project
          <Navbar />
          <Routes>
            <Route path="/recipes" element={<RecipeList />} />
            <Route path="/favorites" element={<RecipeBox />} />
            <Route path="/grocery-list" element={<GroceryList />} />
          </Routes>
    </div>
  );
}

export default App;