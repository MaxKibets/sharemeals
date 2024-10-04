import React, { Suspense } from "react";

import { Button, Loader, Mark, Section } from "@/components/ui";
import MealsList from "@/components/mealsList/MealsList";

const MealsPage: React.FC = async () => {
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
        <Suspense fallback={<Loader />}>
          <MealsList />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
