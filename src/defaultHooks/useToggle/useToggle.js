import { useState } from "react";

function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value) {
    setValue((curValue) => 
    typeof value === "boolean" ? value : !curValue
    );
  }
  return [value, toggleValue];
}
export default useToggle;
