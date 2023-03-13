import React from "react";
import { Card } from "antd";

function Basic({ children }) {
  return (
    <Card title={""} bordered={false} style={{ width: 600 }}>
      {children}
    </Card>
  );
}

export default Basic;
