import db from "better-sqlite3";

import { MealProps } from "@/components/mealsList/meal";

const mealsDB = db("meals.db");

export const getMeals = async (): Promise<MealProps[]> => {
  return mealsDB.prepare("SELECT * FROM meals").all() as MealProps[];
};
