const objStorage = (meal, drink) => ({
  id: meal.idMeal ? meal.idMeal : drink.idDrink,
  type: meal.strMeal ? 'food' : 'drink',
  nationality: meal.strArea ? meal.strArea : '',
  category: meal.strMeal ? meal.strCategory : drink.strCategory,
  alcoholicOrNot: drink.strAlcoholic ? drink.strAlcoholic : '',
  name: meal.strMeal ? meal.strMeal : drink.strDrink,
  image: meal.strMealThumb ? meal.strMealThumb : drink.strDrinkThumb,
});

export default function useSetFav(favEr, setFavEr, { meal, drink, id }) {
  const favRecepies = JSON.parse(localStorage.getItem('favoriteRecipes'));
  let newFavs;
  if (favEr) {
    newFavs = JSON.stringify(favRecepies.filter((recepie) => recepie.id !== id));
  } else if (favRecepies) {
    newFavs = JSON.stringify([...favRecepies, objStorage(meal, drink)]);
  } else {
    newFavs = JSON.stringify([objStorage(meal, drink)]);
  }
  localStorage.setItem('favoriteRecipes', newFavs);
  setFavEr(!favEr);
}
