import React from "react";
import Head from "next/head";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Layout from "@/components/layout";
import "../components/globals.css";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <Head>
          <title>Deirdre Massaro | Design Engineer</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
