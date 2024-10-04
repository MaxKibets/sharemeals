import Image, { StaticImageData } from "next/image";

import css from "./styles/meal.module.css";
import { Button } from "../ui";
import Link from "next/link";

export type MealProps = {
  id: string;
  slug: string;
  title: string;
  image: StaticImageData;
  summary: string;
  creator: string;
};

const Meal: React.FC<MealProps> = ({
  title,
  slug,
  image,
  summary,
  creator,
}) => {
  return (
    <div className={css.meal}>
      <figure className={css.imageWrap}>
        <Link href={`/meals/${slug}`}>
          <Image src={`/${image}`} alt={title} fill />
        </Link>
        <figcaption className={css.captionWrap}>
          <h2 className={css.caption}>{title}</h2>
          <sub className={css.creator}>by {creator}</sub>
        </figcaption>
      </figure>
      <p className={css.summary}>{summary}</p>
      <Button>View Details</Button>
    </div>
  );
};

export default Meal;
