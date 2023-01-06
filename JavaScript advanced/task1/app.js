const root = document.getElementById("root");
const url = "https://www.themealdb.com/api/json/v1/1/random.php";

axios.get(url).then(({ data }) => {
  const mealName = document.createElement("h1");
  const mealArea = document.createElement("h3");
  const mealPhoto = document.createElement("img");
  const mealInstructor = document.createElement("h5");
  mealInstructor.className = "instructions";
  const mealCategory = document.createElement("h3");
  const ingredients = document.createElement("div");
  const ingNames = document.createElement("div");
  const ingMeasures = document.createElement("div");
  const heading = document.createElement("h5");
  ingredients.append(ingNames, ingMeasures);
  ingredients.className = "ingredients";
  ingNames.className = "ingNames";
  ingMeasures.className = "ingMeasures";
  heading.textContent = "Meal ingredients and measures";
  heading.className = "heading";
  mealPhoto.className = "photo";

  const allMeals = data.meals[0];
  mealName.textContent = `Name: ${allMeals.strMeal}`;
  mealArea.textContent = `Region: ${allMeals.strArea}`;
  mealInstructor.textContent = `How to meal: ${allMeals.strInstructions}`;
  mealPhoto.src = allMeals.strMealThumb;
  mealCategory.textContent = `Meal Category: ${allMeals.strCategory}`;

  for (i = 1; i <= 20; i++) {
    const ingrident = document.createElement("p");
    ingNames.append(ingrident);
    let allIngredients = "strIngredient" + [i];
    ingrident.textContent = allMeals[allIngredients];
  }

  for (i = 1; i <= 20; i++) {
    const measure = document.createElement("p");
    ingMeasures.append(measure);
    let allMeasures = "strMeasure" + [i];
    measure.textContent = allMeals[allMeasures];
  }

  root.append(
    mealName,
    mealArea,
    mealCategory,
    mealInstructor,
    mealPhoto,
    heading,
    ingredients
  );
});
