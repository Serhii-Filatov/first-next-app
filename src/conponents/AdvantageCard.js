import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function AdvantageCard({ src, alt, title, txt }) {
  return (
    <Box component="li" sx={{ width: "100%" }}>
      <Image src={src} width={222} height={169} alt={alt} />
      <Typography variant="h3">{title}</Typography>
      <Typography variant="p">{txt}</Typography>
    </Box>
  );
}
