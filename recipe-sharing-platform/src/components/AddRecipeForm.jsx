import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.title || !formData.ingredients || !formData.steps) {
      setError("All fields are required.");
      return;
    }

    if (formData.ingredients.split("\n").length < 2) {
      setError("Please include at least two ingredients.");
      return;
    }

    setError("");
    console.log("Recipe submitted:", formData);

    // Clear form
    setFormData({ title: "", ingredients: "", steps: "" });
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold text-center mb-6">Add a New Recipe</h1>
      <form
        className="bg-white rounded-lg shadow-md p-6 space-y-4"
        onSubmit={handleSubmit}
      >
        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}
        <div>
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300 focus:outline-none"
            placeholder="Enter recipe title"
          />
        </div>
        <div>
          <label
            htmlFor="ingredients"
            className="block text-gray-700 font-medium mb-2"
          >
            Ingredients (separate each ingredient with a new line)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300 focus:outline-none"
            rows="5"
            placeholder="Enter ingredients"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="steps"
            className="block text-gray-700 font-medium mb-2"
          >
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300 focus:outline-none"
            rows="5"
            placeholder="Enter preparation steps"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
