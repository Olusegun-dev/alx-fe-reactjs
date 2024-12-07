function AddRecipe() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Add a New Recipe</h1>
        <form className="bg-white p-6 shadow-md rounded-lg space-y-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Recipe Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter recipe name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter recipe description"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    );
  }
  
  export default AddRecipe;
  