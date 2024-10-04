"use client";

import { Mark, Section } from "@/components/ui";
import React from "react";

const Error: React.FC = () => {
  return (
    <Section centered marginLg>
      <Mark danger>
        <h2>An error has occurred!</h2>
      </Mark>
      Please try again later.
    </Section>
  );
};

export default Error;
