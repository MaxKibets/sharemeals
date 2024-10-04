import React from "react";
import Image from "next/image";

import mealIcon from "@/public/icons/meal.png";
import communityIcon from "@/public/icons/community.png";
import eventsIcon from "@/public/icons/events.png";
import { Mark, Section } from "@/components/ui";

import css from "./styles/communityPage.module.css";

const CommunityPage: React.FC = () => {
  return (
    <>
      <Section marginLg centered>
        <h1>
          One shared passion: <Mark>Food</Mark>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </Section>
      <main className={css.main}>
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
      </main>
    </>
  );
};

export default CommunityPage;
