import React from "react";

type MealDetailsPageContentProps = {
  slug: string;
};

const MealDetailsPageContent: React.FC<MealDetailsPageContentProps> = ({
  slug,
}) => {
  return <div>{slug}</div>;
};

export default MealDetailsPageContent;
