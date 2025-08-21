import { useEffect } from "react";

export function useSpotlightEffect(ref) {
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        ref.current.style.setProperty("--mouse-x", `${x}%`);
        ref.current.style.setProperty("--mouse-y", `${y}%`);
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      return () => element.removeEventListener("mousemove", handleMouseMove);
    }
  }, [ref]);
}