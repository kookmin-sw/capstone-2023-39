import { useEffect, useState } from "react";
import * as S from "./styles";
import IpInformation from "../../Modal/IpInformation";
import axios from "axios";
import _ from "lodash";
import Title from "../../Title";

const columns = [
  {
    title: "IP",
    dataIndex: "target_ip",
    align: "center",
  },
  {
    title: "국가",
    dataIndex: "country_name",
    align: "center",
  },
  {
    title: "score",
    dataIndex: "score",
    align: "center",
  },
  {
    title: "접근 시간",
    dataIndex: "start_time",
    align: "center",
  },
];

function parseTableData(data) {
  const result = data.map((item) => {
    return {
      target_ip: item["target_ip"],
      country_name: item?.geoip["country_name"],
      score: item?.cti["Abused IP score"],
      start_time: item["start_time"],
    };
  });
  return result;
}

function HybridTable(props) {
  const { startDate, endDate } = props.date;
  const [open, setOpen] = useState(false);
  const [ip, setIP] = useState("");
  const [tableData, setTableData] = useState("");

  const handleClick = (ip) => {
    setOpen(true);
    setIP(ip);
  };

  useEffect(() => {
    const response = axios
      .get(`/search/date?date_start=${startDate}&date_end=${endDate}`)
      .then(function (response) {
        setTableData(parseTableData(response.data?.results));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [startDate, endDate]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Title title={"Hybrid Model을 통해 탐지한 악성 IP"} />
      <S.TableContainer
        columns={columns}
        dataSource={tableData}
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
              handleClick(record.target_ip);
            },
          };
        }}
      />
      <IpInformation open={open} close={() => setOpen(false)} ip={ip} />
    </div>
  );
}

export default HybridTable;
