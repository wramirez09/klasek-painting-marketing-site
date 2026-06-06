// Enhanced image imports with a width directive (e.g. nav thumbnails).
// Must live in a script (non-module) .d.ts so the wildcard pattern applies.
declare module "*?enhanced&w=96" {
  import type { Picture } from "vite-imagetools";

  const value: Picture;
  export default value;
}
