"use client";
import React from "react";
import { useFormStatus } from "react-dom";

import { Button } from "../ui";

const SubmitAction: React.FC = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Sending..." : "Share Meal"}
    </Button>
  );
};

export default SubmitAction;
