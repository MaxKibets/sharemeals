import React from "react";
import Image from "next/image";

import { getMeal } from "@/lib/meals";

import { Card, Section } from "../ui";
import css from "./styles/mealDetailsPageContent.module.css";
import { notFound } from "next/navigation";

type MealDetailsPageContentProps = {
  slug: string;
};

const MealDetailsPageContent: React.FC<MealDetailsPageContentProps> = ({
  slug,
}) => {
  const meal = getMeal(slug);

  if (!meal) {
    notFound();
  }

  const { image, title, creator, summary, creator_email, instructions } = meal;

  return (
    <>
      <Section marginLg className={css.topSection}>
        <Card className={css.imageWrap}>
          <Image src={image} alt={title} fill />
        </Card>
        <div className={css.desctiption}>
          <h2>{title}</h2>
          <div className={css.creator}>
            <a href={`mailto:${creator_email}`}>by {creator}</a>
          </div>
          <p>{summary}</p>
        </div>
      </Section>
      <Section>
        <h2 className={css.title}>Instructions:</h2>
        <Card className={css.instructions}>
          <p
            dangerouslySetInnerHTML={{
              __html: instructions.replace(/^\n/, "").replace(/\n/g, "<br />"),
            }}
          />
        </Card>
      </Section>
    </>
  );
};

export default MealDetailsPageContent;
