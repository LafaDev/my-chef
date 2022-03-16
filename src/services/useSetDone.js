const handleTags = (meal, drink) => {
  if (meal.strTags) return meal.strTags.split(',');
  if (drink.strTags) return drink.strTags.split(',');
  return [];
};

const objStorage = (meal, drink) => ({
  id: meal.idMeal ? meal.idMeal : drink.idDrink,
  type: meal.strMeal ? 'food' : 'drink',
  nationality: meal.strArea ? meal.strArea : '',
  category: meal.strMeal ? meal.strCategory : drink.strCategory,
  alcoholicOrNot: drink.strAlcoholic ? drink.strAlcoholic : '',
  name: meal.strMeal ? meal.strMeal : drink.strDrink,
  image: meal.strMealThumb ? meal.strMealThumb : drink.strDrinkThumb,
  doneDate: new Date(),
  tags: handleTags(meal, drink),
});

export default function useSetDone(meal, drink) {
  const doneRecepies = JSON.parse(localStorage.getItem('doneRecipes'));
  let newDone;
  if (doneRecepies) {
    newDone = JSON.stringify([...doneRecepies, objStorage(meal, drink)]);
  } else {
    newDone = JSON.stringify([objStorage(meal, drink)]);
  }
  localStorage.setItem('doneRecipes', newDone);
}
