import React from "react";

import Meal, { MealProps } from "./Meal";
import css from "./styles/mealsList.module.css";

type MealsListProps = {
  meals: MealProps[];
};

const MealsList: React.FC<MealsListProps> = ({ meals }) => {
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
