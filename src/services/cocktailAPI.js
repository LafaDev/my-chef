export const fetchDrinks = async () => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchDrinksCategories = async () => {
  try {
    const response = await fetch('www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchDrinksIngredients = async () => {
  try {
    const response = await fetch('www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchRandomDrink = async () => {
  try {
    const response = await
    fetch('www.thecocktaildb.com/api/json/v1/1/random.php');
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchDrinksByAlcoholic = async (alcoholic) => {
  try {
    if (alcoholic) {
      const response = await
      fetch('www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
      const data = await response.json();
      return data;
    }
    const response = await
    fetch('www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic');
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchDrinksByIngredient = async (ingredient) => {
  try {
    const response = await
    fetch(`www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchDrinksByCategory = async (category) => {
  try {
    const response = await
    fetch(`www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchDrinksByName = async (name) => {
  try {
    const response = await
    fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchDrinksByFirstLetter = async (firstLetter) => {
  try {
    const response = await
    fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchDrinkDetails = async (id) => {
  try {
    const response = await
    fetch(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};
