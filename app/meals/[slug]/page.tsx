import React from "react";

type MealDetailsPageProps = {
  params: {
    slug: string;
  };
};

const MealDetailsPage: React.FC<MealDetailsPageProps> = ({ params }) => {
  return <h2>Meal Details {params.slug}</h2>;
};

export default MealDetailsPage;
