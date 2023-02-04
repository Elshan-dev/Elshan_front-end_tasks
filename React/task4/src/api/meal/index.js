import axios from "axios";

const URL = "https://www.themealdb.com/api/json/v1/1/random.php";

export async function fetchMeal(setMeal) {
    const { data } = await axios.get(URL);
    console.log(data);
    setMeal(data.meals[0]);
  }