import Link from "next/link";

import { Button, Section } from "@/components/ui";
import HomePageSlider from "@/components/homePageSlider/HomePageSlider";

import css from "./page.module.css";

export default function Home() {
  return (
    <>
      <Section marginLg className={css.topSection}>
        <div className={css.sliderWrap}>
          <HomePageSlider />
        </div>
        <div className={css.heroWrap}>
          <div className={css.hero}>
            <h1 className={css.heroTitle}>
              Snap, Share, and Inspire Foodies Everywhere!
            </h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={css.cta}>
            <Link href="/community">Join the Community</Link>
            <Button href="/meals">Explore Meals</Button>
          </div>
        </div>
      </Section>
      <main>
        <Section centered>
          <h2>How it works</h2>
          <p>
            ShareMeal is a platform for foodies to share their favorite recipes
            with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            ShareMeal is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </Section>
        <Section centered>
          <h2>Why ShareMeal?</h2>
          <p>
            ShareMeal is a platform for foodies to share their favorite recipes
            with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            ShareMeal is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </Section>
      </main>
    </>
  );
}
