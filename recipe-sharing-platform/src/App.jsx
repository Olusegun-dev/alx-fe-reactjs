import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import HomePage from "./components/HomePage";
import RecipeDetail from './components/RecipeDetails';
import AddRecipe from './components/AddRecipe';

function App() {
  return (
    <div>
      <HomePage />

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
