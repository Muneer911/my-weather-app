import { useEffect, useState } from "react";

export const useField = () => {
  const [val, setVal] = useState("Washington");

  const onChange = (e) => {
    setVal(e.target.value);
  };

  return [onChange, val];
};
