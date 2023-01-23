
import { useEffect, useState } from "react";
import { fetchMeal } from "api/meal";
import styles from "./index.module.css";




export function Yummy({}) {
  const [meal, setMeal] = useState({});
  useEffect(() => {
    fetchMeal(setMeal);
  }, []);

  return (
    <>
      <h1 className={styles.heading}>Welcome to canteen</h1>
      {Object.keys(meal).length > 0 && (
        <>
        <p>Name: {meal.strMeal}</p>
          <p>Origin country:{meal.strArea}</p>
          <p>Meal category: {meal.strCategory}</p>
          <a target="_blank" href={`${meal.strYoutube}`}>Tutorial</a>
          <img className={styles.img} src={meal.strMealThumb} alt={`${meal.strMeal}`} />
        </>
      )}
    </>
  );
}
