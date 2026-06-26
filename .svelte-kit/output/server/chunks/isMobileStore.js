import { r as readable } from "./index.js";
const isMobileStore = readable(true, function(set) {
  let stop = () => {
  };
  if (typeof window !== "undefined") {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const setMatches = () => set(mediaQuery.matches);
    setMatches();
    mediaQuery.addEventListener("change", setMatches);
    stop = () => mediaQuery.removeEventListener("change", setMatches);
  }
  return stop;
});
export {
  isMobileStore as i
};
