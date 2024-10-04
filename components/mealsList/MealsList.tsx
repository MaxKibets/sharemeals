import React from "react";

import { getMeals } from "@/lib/meals";

import Meal from "./Meal";
import css from "./styles/mealsList.module.css";

const MealsList: React.FC = async () => {
  const meals = await getMeals();

  return (
    <ul className={css.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <Meal {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsList;
