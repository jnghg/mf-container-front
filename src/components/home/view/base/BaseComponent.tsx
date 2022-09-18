import { useRouter } from "next/dist/client/router";

const BaseComponent = () => {
  const router = useRouter();

  const onClickMain = () => {
    router.push("/");
  };
  const onClickApp1 = () => {
    router.push("/app1");
  };
  const onClickApp2 = () => {
    router.push("/app2");
  };

  return (
    <>
      <h1>Main Component</h1>
      <button onClick={onClickMain}>Main Component</button>
      <button onClick={onClickApp1}>App1 Component</button>
      <button onClick={onClickApp2}>App2 Component</button>
    </>
  );
};

export default BaseComponent;
