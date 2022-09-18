import BaseComponent from "@comp/home/view/base/BaseComponent";
import type { AppProps } from "next/app";
import Head from "next/head";
import "antd/dist/antd.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next | mf-container-front</title>
      </Head>
      <BaseComponent />
      <Component {...pageProps} />
    </>
  );
}

export default App;
