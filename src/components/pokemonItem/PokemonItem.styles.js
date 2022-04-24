export const styles = {
  paper: {
    animationDuration: ".2s",
    "@keyframes bounce": {
      "0%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(-3px)" },
      "100%": { transform: "translateY(0) " },
    },
    "&:hover": {
      animationName: "bounce",
      animationTimingFunction: "linear",
    },
    width: 220,
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "3.125em",
  },
};
