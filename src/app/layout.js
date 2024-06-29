import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <body>{children}</body>
      </AppRouterCacheProvider>
    </html>
  );
}
