import "../styles/index.scss";
import Head from "next/head";
import { AppProps } from "next/app";
import React from "react";

const AppTheme: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={"/apple-touch-icon.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={"/favicon-16x16.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={"/favicon-32x32.png"}
        />
        <link rel="manifest" href={"/site.webmanifest"} />
        <link rel="mask-icon" href={"/safari-pinned-tab.svg"} color="#ffffff" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>Mainstack</title>
      </Head>
      {children}
    </div>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className=" overflow-y-hidden">
        <AppTheme>
          <Component {...pageProps} />
        </AppTheme>
    </div>
  );
}

export default MyApp;
