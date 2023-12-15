import { useEffect, useState } from "react";

export default function useIsMobile() {
  const [screenSize, setScreenSize] = useState(0);
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
  return screenSize <= 450;
}
