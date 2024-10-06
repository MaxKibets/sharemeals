import { StaticImageData } from "next/image";
import db from "better-sqlite3";

export type MealProps = {
  id: string;
  slug: string;
  title: string;
  image: StaticImageData;
  summary: string;
  creator: string;
  instructions: string;
  creator_email: string;
};

const mealsDB = db("meals.db");

export const getMeals = async (): Promise<MealProps[]> => {
  // not async at it is... but it is a good example of how to use suspense
  return mealsDB.prepare("SELECT * FROM meals").all() as MealProps[];
};

export const getMeal = (slug: string): MealProps => {
  return mealsDB
    .prepare("SELECT * FROM meals WHERE slug = ?")
    .get(slug) as MealProps;
};
