"use client";
import { Inter } from "next/font/google";
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/animation.css";
import "../styles/odometer.css";
import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir";
import { TssCacheProvider } from "tss-react";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider, useSnackbar, closeSnackbar } from "notistack";

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
                            <SnackbarProvider
                                anchorOrigin={{
                                    horizontal: "right",
                                    vertical: "top",
                                }}
                                maxSnack={3}
                            >
                                {children}
                            </SnackbarProvider>
                        </NextAppDirEmotionCacheProvider>
                    </ThemeProvider>
                </NextAppDirEmotionCacheProvider>
            </body>
        </html>
    );
}
