import { useState } from "react";
import * as S from "./styles";
import { testdata, columns } from "./testdata";
import PoolIpInformation from "../../Modal/PoolIpInformation";

function BitcoinTable() {
  const [open, setOpen] = useState(false);
  const [poolIp, setPoolIP] = useState("");

  const handleClick = (ip) => {
    setOpen(true);
    setPoolIP(ip);
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
        //dataSource={testdata}
        dataSource={[]}
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
            }, // pool ip 전달
          };
        }}
      />
      <PoolIpInformation open={open} close={() => setOpen(false)} ip={poolIp} />
    </div>
  );
}

export default BitcoinTable;
