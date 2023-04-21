export const columns = [
  {
    title: "IP",
    dataIndex: "ip",
  },
  {
    title: "국가",
    dataIndex: "nation",
  },
  {
    title: "score",
    dataIndex: "score",
  },
  {
    title: "접근 시간",
    dataIndex: "accessTime",
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
