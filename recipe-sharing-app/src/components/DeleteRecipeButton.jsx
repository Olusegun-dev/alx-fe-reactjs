import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate;

  return (
    <button onClick={() => deleteRecipe(recipeId)}>Delete Recipe</button>
  );
};

export default DeleteRecipeButton;
