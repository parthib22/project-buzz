import { LinearProgress } from "@mui/material";

export default function Loading() {
  return (
    <LinearProgress
      color="inherit"
      style={{
        color: "crimson",
        position: "absolute",
        zIndex: 999,
        top: 0,
        width: "100vw",
      }}
    />
  );
}
