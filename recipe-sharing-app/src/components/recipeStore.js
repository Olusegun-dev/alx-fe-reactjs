import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  // Add a recipe to favorites
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...new Set([...state.favorites, recipeId])], // Prevent duplicates
  })),

  // Remove a recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),

  // Generate personalized recommendations based on favorites
  generateRecommendations: () => set((state) => {
    const recommended = state.recipes.filter((recipe) =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5 // Mock recommendation logic
    );
    return { recommendations: recommended };
  }),
}));

export { useRecipeStore };
