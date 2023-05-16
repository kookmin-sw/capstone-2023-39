import { useState } from "react";
import * as S from "./styles";
import { testdata, columns } from "./testdata";
import PoolIpInformation from "../../Modal/PoolIpInformation";

function BitcoinTable() {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    ip: "",
    name: "",
  });

  const handleClick = (ip, name) => {
    setOpen(true);
    setInfo({ ip: ip, name: name });
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
              handleClick(record.ip, record.name);
            }, // pool ip 전달
          };
        }}
      />
      <PoolIpInformation open={open} close={() => setOpen(false)} info={info} />
    </div>
  );
}

export default BitcoinTable;
