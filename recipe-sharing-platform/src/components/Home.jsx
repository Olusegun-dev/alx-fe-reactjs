function Home() {
    const recipes = [
      { id: 1, name: 'Spaghetti Bolognese', description: 'A classic Italian pasta dish.' },
      { id: 2, name: 'Chicken Curry', description: 'A flavorful Indian curry.' },
      { id: 3, name: 'Beef Tacos', description: 'Mexican tacos with seasoned beef.' },
    ];
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-bold mb-2">{recipe.name}</h2>
              <p className="text-gray-600">{recipe.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Home;
  