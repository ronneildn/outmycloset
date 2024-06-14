"use client";
import { Inter } from "next/font/google";
import "../public/styles/reset.css";
import "../public/styles/globals.css";
import "../public/styles/animation.css";
import "../public/styles/odometer.css";
import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir";
import { TssCacheProvider } from "tss-react";
import { ThemeProvider } from "@mui/material/styles";

const inter = Inter({ subsets: ["latin"] });

import Themes from "../constants/theme.js";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
                    <ThemeProvider theme={Themes.defaultTheme}>
                        <NextAppDirEmotionCacheProvider
                            options={{ key: "tss" }}
                            CacheProvider={TssCacheProvider}
                        >
                            {children}
                        </NextAppDirEmotionCacheProvider>
                    </ThemeProvider>
                </NextAppDirEmotionCacheProvider>
            </body>
        </html>
    );
}
