import { useEffect, useState } from "react";
const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const windowSizeHandler = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);

  return width;
};

export default useWidth;
