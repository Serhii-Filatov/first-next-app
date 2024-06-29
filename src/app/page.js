import Box from "@mui/material/Box";
import AdvantagesList from "@/conponents/advantagesList";

export default function Page() {
  return (
    <Box component="section" sx={{ p: "50px", md: 20, lg: 100, xs: 10 }}>
      <AdvantagesList />
    </Box>
  );
}
