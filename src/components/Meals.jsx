/* import { useEffect } from "react";
import { useState } from "react"; */
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";

const requestConfig = {};

export default function Meals() {
  //const [loadedMeals, setLoadedMeals] = useState([]);

  /* useEffect(() => {
    async function fetchMeals() {
      const responsse = await fetch("http://localhost:3000/meals");

      if (!responsse.ok) {
        //...
      }
      const meals = await responsse.json();
      setLoadedMeals(meals);
    }
    fetchMeals();
  }, []); */

  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  console.log(loadedMeals);

  if (isLoading) {
    return <p>Fetching meals...</p>;
  }

  /*   if (!data) {
    return <p>No meals found!</p>;
  } */

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
