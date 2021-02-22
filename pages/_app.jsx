import { useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/globals.scss";
import "../styles/tailwind.css";
import Head from "next/head";

import "aos/dist/aos.css";
import Aos from "aos";

import { AuthProvider } from "../auth";
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <AuthProvider>
      <Head>
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta property="og:locale" content="id_ID" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/logo/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/logo/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/logo/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/logo/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/logo/icon512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/logo/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/logo/favicon-96x96.png"
        />
        <meta name="msapplication-TileColor" content="#ff7272" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ff7272" />
      </Head>

      <Nav />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  );
}

export default MyApp;
