import Image from "next/image";
import Link from "next/link";

import { MealProps } from "@/lib/meals";

import css from "./styles/meal.module.css";
import { Button, Card, Mark } from "../ui";

const Meal: React.FC<MealProps> = ({
  title,
  slug,
  image,
  summary,
  creator,
}) => {
  return (
    <div className={css.meal}>
      <Card>
        <figure className={css.imageWrap}>
          <Link href={`/meals/${slug}`}>
            <Image src={`/${image}`} alt={title} fill sizes="100%" />
          </Link>
          <figcaption className={css.captionWrap}>
            <h2 className={css.caption}>{title}</h2>
            <Mark className={css.creator}>by {creator}</Mark>
          </figcaption>
        </figure>
      </Card>
      <p className={css.summary}>{summary}</p>
      <Button>View Details</Button>
    </div>
  );
};

export default Meal;
