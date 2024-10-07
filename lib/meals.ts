import fs from "node:fs";
import { StaticImageData } from "next/image";
import db from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

export type BaseMealProps = {
  slug: string;
  title: string;
  summary: string;
  creator: string;
  instructions: string;
  creator_email: string;
};

export type MealProps = BaseMealProps & {
  id: string;
  image: StaticImageData;
};

export type SaveMealProps = BaseMealProps & {
  image: File;
};

const mealsDB = db("meals.db");

export const getMeals = async (): Promise<MealProps[]> => {
  // not async at it is... but it is a good example of how to use suspense
  return mealsDB.prepare("SELECT * FROM meals").all() as MealProps[];
};

export const getMeal = (slug: string): MealProps | void => {
  try {
    return mealsDB
      .prepare("SELECT * FROM meals WHERE slug = ?")
      .get(slug) as MealProps;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Getting meal failed! Details: ${error.message}`);
    } else {
      console.error("Getting meal failed! Unknown error.");
    }
  }
};

export const saveMeal = async (meal: SaveMealProps) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferdImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferdImage), (error) => {
    if (error) {
      throw new Error(`Saving image failed! Detailes: ${error.message}`);
    }
  });

  mealsDB
    .prepare(
      `
    INSERT INTO meals 
      (slug, title, summary, creator, instructions, creator_email, image)
    VALUES 
      (@slug, @title, @summary, @creator, @instructions, @creator_email, @image)`,
    )
    .run({ ...meal, image: `/images/${fileName}` });
};
