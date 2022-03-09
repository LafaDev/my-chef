export const fetchMeals = async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchMealsCategories = async () => {
  try {
    const response = await fetch('www.themealdb.com/api/json/v1/1/list.php?c=list');
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchMealsAreas = async () => {
  try {
    const response = await fetch('www.themealdb.com/api/json/v1/1/list.php?a=list');
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchMealsIngredients = async () => {
  try {
    const response = await fetch('www.themealdb.com/api/json/v1/1/list.php?i=list');
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchRandomMeal = async () => {
  try {
    const response = await fetch('www.themealdb.com/api/json/v1/1/random.php');
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchMealsByCategory = async (category) => {
  try {
    const response = await
    fetch(`www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchMealsByArea = async (area) => {
  try {
    const response = await
    fetch(`www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchMealsByIngredient = async (ingredient) => {
  try {
    const response = await
    fetch(`www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchMealsByFirstLetter = async (firstLetter) => {
  try {
    const response = await
    fetch(`www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchMealsByName = async (name) => {
  try {
    const response = await
    fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchMealDetails = async (id) => {
  try {
    const response = await
    fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};
