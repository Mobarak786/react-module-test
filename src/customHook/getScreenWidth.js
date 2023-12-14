import { useEffect, useState } from "react";

export default function useIsMobile() {
  const [screenSize, setScreenSize] = useState(null);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(() => window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setScreenSize(() => window.innerWidth);
      });
    };
  }, []);
  if (screenSize === null) {
    return false;
  }
  return screenSize <= 420;
}
