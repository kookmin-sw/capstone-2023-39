import React from "react";
import { Card, Avatar } from "antd";

function Loading(props) {
  const { Meta } = Card;
  return (
    <Card style={{ width: 300, marginTop: 16 }} loading={true}>
      <Meta
        avatar={<Avatar src="https://joesch.moe/api/v1/random?key=1" />}
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
}

export default Loading;
