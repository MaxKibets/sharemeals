import React from "react";
import Image from "next/image";

import mealIcon from "@/public/icons/meal.png";
import communityIcon from "@/public/icons/community.png";
import eventsIcon from "@/public/icons/events.png";

import { Mark, Section } from "../ui";
import css from "./styles/communityPageContent.module.css";

const CommunityPageContent: React.FC = () => {
  return (
    <>
      <Section marginLg centered>
        <h1>
          One shared passion: <Mark>Food</Mark>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </Section>
      <Section centered className={css.perksWrap}>
        <h2>Community Perks</h2>
        <ul className={css.perks}>
          <li>
            <Image src={mealIcon} alt="A delicious meal" />
            <p>Share & discover recipes</p>
          </li>
          <li>
            <Image src={communityIcon} alt="A crowd of people, cooking" />
            <p>Find new friends & like-minded people</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </Section>
    </>
  );
};

export default CommunityPageContent;
