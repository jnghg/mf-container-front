import { useRouter } from "next/dist/client/router";
import { Button, Space } from "antd";

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
      <Space>
        <Button onClick={onClickMain}>Main Component</Button>
        <Button onClick={onClickApp1}>App1 Component</Button>
        <Button onClick={onClickApp2}>App2 Component</Button>
      </Space>
    </>
  );
};

export default BaseComponent;
