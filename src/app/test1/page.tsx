"use client";

import React, { useState } from "react";
import { CirclePicker } from "react-color";
import "./ColorPickerComponent.css"; // Make sure to create this CSS file

const ColorPickerComponent = () => {
  const [color, setColor] = useState("#f44336"); // Default color

  const handleColorChange = (color: any) => {
    setColor(color.hex); // Update state with the selected color
  };

  return (
    <div>
      <h3>Selected Color: {color}</h3>
      <div className="color-picker-wrapper">
        <CirclePicker color={color} onChangeComplete={handleColorChange} />
      </div>
    </div>
  );
};

export default ColorPickerComponent;
