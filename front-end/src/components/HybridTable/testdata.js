export const columns = [
  {
    title: "IP",
    dataIndex: "ip",
    align: "center",
  },
  {
    title: "국가",
    dataIndex: "nation",
    align: "center",
  },
  {
    title: "score",
    dataIndex: "score",
    align: "center",
  },
  {
    title: "접근 시간",
    dataIndex: "accessTime",
    align: "center",
  },
];

export const testdata = [];
for (let i = 0; i < 50; i++) {
  testdata.push({
    ip: (Math.random() * i).toFixed(9),
    nation: `nation ${i}`,
    score: Math.random().toFixed(5),
    accessTime: `time ${i}`,
  });
}
