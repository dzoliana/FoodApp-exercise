import { useEffect } from "react";
import { useState } from "react";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const responsse = await fetch("http://localhost:3000/meals");

      if (!responsse.ok) {
        //...
      }
      const meals = await responsse.json();
      setLoadedMeals(meals);
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}
