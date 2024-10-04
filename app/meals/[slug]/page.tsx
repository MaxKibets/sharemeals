import React from "react";

import MealDetailsPageContent from "@/components/mealDetailsPageContent/MealDetailsPageContent";

type MealDetailsPageProps = {
  params: {
    slug: string;
  };
};

const MealDetailsPage: React.FC<MealDetailsPageProps> = ({ params }) => {
  return <MealDetailsPageContent slug={params.slug} />;
};

export default MealDetailsPage;
