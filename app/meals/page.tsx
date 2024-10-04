import React from "react";

import { Button, Mark, Section } from "@/components/ui";
import MealsList from "@/components/mealsList/mealsList";
import { getMeals } from "@/lib/meals";

const MealsPage: React.FC = async () => {
  const meals = await getMeals();

  return (
    <>
      <Section marginLg centered>
        <h1>
          Delicious meals, created <Mark>by you</Mark>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p>
          <Button href="/meals/share">Share Your Favorite Recipe</Button>
        </p>
      </Section>
      <main>
        <MealsList meals={meals} />
      </main>
    </>
  );
};

export default MealsPage;
