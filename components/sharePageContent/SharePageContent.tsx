import React from "react";

import { shareMeal } from "@/lib/actions";

import { Button, Input, Label, Mark, Section, Textarea } from "../ui";
import css from "./styles/sharePageContent.module.css";
import ImagePicker from "../imagePicker/ImagePicker";

const SharePageContent: React.FC = () => {
  return (
    <>
      <Section centered marginLg>
        <h1>
          Share your <Mark>favorite meal</Mark>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </Section>
      <Section>
        <form className={css.form} action={shareMeal}>
          <div className={css.row}>
            <div className={css.fieldWrap}>
              <Label htmlFor="name">Your name</Label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div className={css.fieldWrap}>
              <Label htmlFor="email">Your email</Label>
              <Input type="email" id="email" name="email" required />
            </div>
          </div>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input type="text" id="title" name="title" required />
          </div>
          <div>
            <Label htmlFor="summary">Short Summary</Label>
            <Input type="text" id="summary" name="summary" required />
          </div>
          <div>
            <Label htmlFor="instructions">In structions</Label>
            <Textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            />
          </div>
          <ImagePicker name="image" />
          <div className={css.actions}>
            <Button type="submit">Share Meal</Button>
          </div>
        </form>
      </Section>
    </>
  );
};

export default SharePageContent;
