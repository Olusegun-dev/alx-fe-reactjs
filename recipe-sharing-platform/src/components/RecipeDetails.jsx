function RecipeDetail({ recipe }) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
        <p className="text-gray-600">{recipe.description}</p>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc ml-5">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Steps</h2>
          <ol className="list-decimal ml-5">
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
  
  export default RecipeDetail;
  