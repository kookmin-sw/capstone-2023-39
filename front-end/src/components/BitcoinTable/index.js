import { useState } from "react";
import * as S from "./styles";
import { testdata, columns } from "./testdata";
import OuterIpInformation from "../Modal/OuterIpInformation";

function BitcoinTable() {
  const [open, setOpen] = useState(false);
  const [outerIp, setOuterIP] = useState("");

  const handleClick = (ip) => {
    setOpen(true);
    setOuterIP(ip);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "100%",
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
      {/*<OuterIpInformation
        open={open}
        close={() => setOpen(false)}
        ip={outerIp}
      />*/}
    </div>
  );
}

export default BitcoinTable;
