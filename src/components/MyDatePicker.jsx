import { useState } from "react";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export function MyDatePicker() {
  const [selected, setSelected] = useState();

  return (
    <DayPicker
      animate
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected
          ? `Selected: ${selected.toLocaleDateString()}`
          : "Please select a date"
      }
    />
  );
}
