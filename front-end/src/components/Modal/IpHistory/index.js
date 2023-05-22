import * as S from "./styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import _ from "lodash";

const column = [
  {
    title: "Start Time",
    dataIndex: "start_time",
    align: "center",
  },
  {
    title: "End Time",
    dataIndex: "end_time",
    align: "center",
  },
  {
    title: "Card Inner Port",
    dataIndex: "card_inner_port",
    align: "center",
  },
  {
    title: "Card Inner IP",
    dataIndex: "card_inner_ip",
    align: "center",
  },
  {
    title: "Avg Inner Byts",
    dataIndex: "avg_inner_byts",
    align: "center",
  },
  {
    title: "Avg Outer Byts",
    dataIndex: "avg_outer_byts",
    align: "center",
  },
  {
    title: "Avg Inner Pkts",
    dataIndex: "avg_inner_pkts",
    align: "center",
  },
];

const parseTableData = (data) => {
  const result = _.map(
    data,
    ({
      start_time,
      end_time,
      card_inner_port,
      card_inner_ip,
      avg_inner_byts,
      avg_outer_byts,
      avg_inner_pkts,
    }) => ({
      start_time,
      end_time,
      card_inner_port,
      card_inner_ip,
      avg_inner_byts,
      avg_outer_byts,
      avg_inner_pkts,
    })
  );
  return result;
};

function IpHistory(props) {
  const { open, close, ip } = props;
  const [tableData, setTableData] = useState("");

  useEffect(() => {
    const response = axios
      .get(`/search/ip?ip=${ip}`)
      .then(function (response) {
        setTableData(parseTableData(response.data?.results));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [ip]);

  return (
    <S.CustomModal
      title={`${ip} History`}
      visible={open}
      onCancel={close}
      closable={true}
      centered
      footer={null}
      width={950}
      bodyStyle={{ height: 665 }}
    >
      <S.TableContainer
        columns={column}
        dataSource={tableData}
        size={"middle"}
        pagination={{ position: ["bottomCenter"], pageSize: 8 }}
        style={{
          cursor: "pointer",
          position: "relative",
          background: "#ffffff",
        }}
      />
    </S.CustomModal>
  );
}

export default IpHistory;
