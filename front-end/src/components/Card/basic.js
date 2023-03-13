import React from "react";
import { Card } from "antd";

function Basic({ children }) {
  return (
    <Card title={""} bordered={false} style={{ width: "fit-content" }}>
      {children}
    </Card>
  );
}

export default Basic;
