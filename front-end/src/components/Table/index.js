import { useState } from "react";
import * as S from "./styles";
import { testdata, columns } from "./testdata";
import IpInformation from "../Modal/ipInformation";

function TableChart() {
  const [open, setOpen] = useState(false);
  const [ip, setIP] = useState("");

  const handleClick = (ip) => {
    setOpen(true);
    setIP(ip);
    document.body.style.overflow = "hidden";
  };

  const modalClose = () => {
    setOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div style={{ position: "relative" }}>
      {open ? <IpInformation close={modalClose} ip={ip} /> : null}
      <S.TableContainer
        columns={columns}
        dataSource={testdata}
        size={"middle"}
        pagination={{ position: ["bottomCenter"] }}
        style={{ cursor: "pointer", position: "relative" }}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              handleClick(record.ip);
            }, // click row
          };
        }}
      />
    </div>
  );
}

export default TableChart;
