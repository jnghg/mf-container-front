import BaseComponent from "@comp/home/view/base/BaseComponent";
import type { NextPage } from "next";
import dynamicFederation from "@shared/utils/Dynamicfederation";
import dynamic from "next/dynamic";
import React from "react";

const App1Button = dynamic(
  () => dynamicFederation("app1", "./Button").then((comp) => comp.Button),
  { ssr: false }
);

const App2Button = dynamic(
  () => dynamicFederation("app2", "./Button").then((comp) => comp.Button),
  { ssr: false }
);

const Home: NextPage = () => {
  return (
    <>
      <BaseComponent />

      <App1Button />
      <App2Button />
    </>
  );
};

export default Home;
