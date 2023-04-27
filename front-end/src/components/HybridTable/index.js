import { useState } from "react";
import * as S from "./styles";
import { testdata, columns } from "./testdata";
import IpInformation from "../Modal/ipInformation";

function HybridTable() {
  const [open, setOpen] = useState(false);
  const [ip, setIP] = useState("");

  const handleClick = (ip) => {
    setOpen(true);
    setIP(ip);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <S.TableContainer
        columns={columns}
        dataSource={testdata}
        size={"middle"}
        pagination={{ position: ["bottomCenter"] }}
        style={{
          cursor: "pointer",
          position: "relative",
          background: "#ffffff",
        }}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              handleClick(record.ip);
            }, // click row
          };
        }}
      />
      <IpInformation open={open} close={() => setOpen(false)} ip={ip} />
    </div>
  );
}

export default HybridTable;
