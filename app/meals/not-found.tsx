"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { Mark, Section } from "@/components/ui";

const NotFound: React.FC = () => {
  const pathname = usePathname();
  const mealName = pathname.replace(/\/meals\//, "").replace(/-/g, " ");

  return (
    <Section centered marginLg>
      <Mark>
        <h2>Meal Not Found!</h2>
      </Mark>
      The meal <Mark>&quot;{mealName}&quot;</Mark> does not exist.
    </Section>
  );
};

export default NotFound;
