import { tv } from "tailwind-variants";
import "dequal";
import "./create.js";
import "clsx";
const buttonVariants = tv({
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-primary-dark text-white hover:bg-primary",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "box-border border-2 border-primary bg-transparent hover:bg-primary-dark hover:border-primary-dark text-white hover:text-white",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-white underline-offset-4 underline !p-0 !font-normal !h-fit",
      white: "bg-white text-primary-dark hover:bg-off-white"
    },
    size: {
      default: "h-12 px-5 py-3",
      sm: "rounded-md px-3",
      lg: "rounded-md px-8",
      icon: "h-10 w-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
export {
  buttonVariants as b
};
