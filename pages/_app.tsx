import "../styles/index.scss";
import Head from "next/head";
import { AppProps } from "next/app";
import React from "react";
import { store } from "../services/store";
import { Provider } from "react-redux";

type IProps = {
  children: React.ReactNode; 
};
const AppTheme: React.FC<IProps> = ({ children }) => {
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

export const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className=" overflow-y-hidden">
      <Provider store={store}>
        <AppTheme>
          <Component {...pageProps} />
        </AppTheme>
      </Provider>
    </div>
  );
};

export default MyApp;
