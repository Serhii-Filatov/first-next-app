import AdvantageCard from "./AdvantageCard";

import { Box, Grid } from "@mui/material";

import cardsData from "@/data/cardsData";

export default function AdvantagesList() {
  return (
    <Box component="ul" sx={{ flexGrow: 1 }}>
      <Grid container="li" spacing={2}>
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <AdvantageCard
              src={card.src}
              alt={card.alt}
              title={card.title}
              txt={card.txt}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
