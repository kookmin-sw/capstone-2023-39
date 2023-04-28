export const columns = [
  {
    title: "외부 IP",
    dataIndex: "ip",
    align: "center",
  },
  {
    title: "외부 Domain Name",
    dataIndex: "domain",
    align: "center",
  },
  {
    title: "Count",
    dataIndex: "count",
    align: "center",
  },
];

export const testdata = [];
for (let i = 0; i < 50; i++) {
  testdata.push({
    ip: (Math.random() * i).toFixed(9),
    domain: `domain ${i}`,
    count: Math.random().toFixed(1),
  });
}
