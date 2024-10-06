import React from "react";

import { Mark, Section } from "@/components/ui";

const NotFound: React.FC = () => {
  return (
    <Section centered marginLg>
      <Mark>
        <h2>Page Not Found!</h2>
      </Mark>
      The page you are looking for does not exist.
    </Section>
  );
};

export default NotFound;
