import AdvantageCard from "./AdvantageCard";

import { Box, Grid } from "@mui/material";

const cardsData = [
  {
    src: "/images/buyingSimplified.svg",
    alt: "Simplify SaaS purchasing",
    title: "Simplify SaaS purchasing",
    txt: "Ready to subscribe? Create a secure virtual credit card instantly, one per vendor, with tight spending limits. No more unwanted payments. Never overpay. Never pay for a ‘free trial.’",
  },
  {
    src: "/images/community.svg",
    alt: "A helpful community of SaaS users",
    title: "A helpful community of SaaS users",
    txt: "SideKick shows you relevant online discussions about the product you&apos;re researching. And if you have a question, just click and ask.",
  },
  {
    src: "/images/instantAlert.svg",
    alt: "Instant alerts for discounts",
    title: "Instant alerts for discounts",
    txt: "Get alerted instantly when a discount is available for a SaaS product. Click further to view discounts details, pricing, reviews, features, comparisons, and screenshots.",
  },
  {
    src: "/images/researchSoftware.svg",
    alt: "Research software as you browse",
    title: "Research software as you browse",
    txt: "Enable browser tracking (optional) to track your team&apos;s subscription usage company-wide. See which subscriptions you&apos;re paying for that aren&apos;t being used, then cancel them easily.",
  },
  {
    src: "/images/indentifySubscription.svg",
    alt: "Identify unused subscriptions",
    title: "Identify unused subscriptions",
    txt: "Enable browser tracking (optional) to track your team&apos;s subscription usage company-wide. See which subscriptions you&apos;re paying for that aren&apos;t being used, then cancel them easily.",
  },
  {
    src: "/images/reviews.svg",
    alt: "Real user reviews",
    title: "Real user reviews",
    txt: "See what real users are saying about the SaaS product you&apos;re considering. Scroll through the SideKick pop-up and see all the opinions you need to make a decision.",
  },
];

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
