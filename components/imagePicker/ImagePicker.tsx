"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

import { Button, Card } from "../ui";
import css from "./styles/imagePicker.module.css";

const ImagePicker: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(
    null,
  );

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    // TODO check if the file is an image...
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={css.wrap}>
      <Card className={css.picker}>
        {pickedImage ? (
          <Image
            src={pickedImage as string}
            alt=""
            fill
            className={css.image}
          />
        ) : (
          <span>No image picked yet</span>
        )}
      </Card>
      <input
        id="imagePicker"
        type="file"
        name="imagePicker"
        accept="image/png, image/jpeg"
        ref={inputRef}
        onChange={handleChange}
        className={css.input}
        required
      />
      <Button
        type="button"
        className={css.button}
        onClick={handleClick}
        secondary
      >
        Add an image
      </Button>
    </div>
  );
};

export default ImagePicker;
