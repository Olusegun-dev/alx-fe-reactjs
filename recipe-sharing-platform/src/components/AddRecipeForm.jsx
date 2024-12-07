import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const errors = {};

    if (!formData.title.trim()) {
      errors.title = "Title is required.";
    }

    if (!formData.ingredients.trim()) {
      errors.ingredients = "Ingredients are required.";
    } else if (formData.ingredients.split("\n").length < 2) {
      errors.ingredients = "Please include at least two ingredients.";
    }

    if (!formData.steps.trim()) {
      errors.steps = "Preparation steps are required.";
    } else if (formData.steps.split("\n").length < 2) {
      errors.steps = "Please include at least two steps.";
    }

    return errors;
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear field-specific error on change
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If valid, log the data (replace with actual submission logic)
    console.log("Recipe submitted:", formData);

    // Clear the form
    setFormData({ title: "", ingredients: "", steps: "" });
    setErrors({});
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold text-center mb-6">Add a New Recipe</h1>
      <form
        className="bg-white rounded-lg shadow-md p-6 space-y-4"
        onSubmit={handleSubmit}
      >
        {/* Title Field */}
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
            className={`w-full border ${
              errors.title ? "border-red-500" : "border-gray-300"
            } rounded-md p-2 focus:ring focus:ring-blue-300 focus:outline-none`}
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients Field */}
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
            className={`w-full border ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            } rounded-md p-2 focus:ring focus:ring-blue-300 focus:outline-none`}
            rows="5"
            placeholder="Enter ingredients"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps Field */}
        <div>
          <label htmlFor="steps" className="block text-gray-700 font-medium mb-2">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            className={`w-full border ${
              errors.steps ? "border-red-500" : "border-gray-300"
            } rounded-md p-2 focus:ring focus:ring-blue-300 focus:outline-none`}
            rows="5"
            placeholder="Enter preparation steps"
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
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
