import React, { ReactNode } from "react";

type ImagePickerProps = {
  name: string;
  children: ReactNode;
};

const ImagePicker: React.FC<ImagePickerProps> = ({ name, children }) => {
  return (
    <div>
      <label htmlFor={name}>{children}</label>
      <input type="file" id={name} name={name} accept="image/*" />
    </div>
  );
};

export default ImagePicker;
