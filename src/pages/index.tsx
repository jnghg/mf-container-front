import type { NextPage } from "next";
import dynamicFederation from "@shared/utils/Dynamicfederation";
import dynamic from "next/dynamic";
import React from "react";

const App1 = dynamic(
  () => dynamicFederation("app1", "./Title").then((comp) => comp.Title),
  { ssr: false }
);

const App2 = dynamic(
  () => dynamicFederation("app2", "./Title").then((comp) => comp.Title),
  { ssr: false }
);

const Home: NextPage = () => {
  return (
    <>
      <App1 />
      <App2 />
    </>
  );
};

export default Home;
