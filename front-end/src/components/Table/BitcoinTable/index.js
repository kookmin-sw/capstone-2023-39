import { useEffect, useState } from "react";
import * as S from "./styles";
import PoolIpInformation from "../../Modal/PoolIpInformation";
import axios from "axios";

const columns = [
  {
    title: "Pool Name",
    dataIndex: "name",
    align: "center",
  },
  {
    title: "Pool Ip",
    dataIndex: "ip",
    align: "center",
  },
  {
    title: "Count",
    dataIndex: "count",
    align: "center",
  },
];

const parseTableData = (data) => {
  let result = new Array([]);
  for (var i = 0; i < data.pool_names.length; i++) {
    result.push({
      name: data?.pool_names[i],
      ip: data?.pool_ips[i],
      count: data?.counts[i],
    });
  }
  return result.slice(1);
};

function BitcoinTable() {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    ip: "",
    name: "",
  });
  const [tableData, setTableData] = useState("");

  const handleClick = (ip, name) => {
    setOpen(true);
    setInfo({ ip: ip, name: name });
  };

  useEffect(() => {
    const response = axios
      .get(`/coin/get_ordered_pool_list`)
      .then(function (response) {
        setTableData(parseTableData(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
              handleClick(record.ip, record.name);
            }, // pool ip, name 전달
          };
        }}
      />
      <PoolIpInformation open={open} close={() => setOpen(false)} info={info} />
    </div>
  );
}

export default BitcoinTable;
