import { columns, testdata } from "./testdata";
import * as S from "./styles";

function TableChart() {
  return (
    <S.TableContainer
      columns={columns}
      dataSource={testdata}
      size={"middle"}
      pagination={{ position: ["bottomCenter"] }}
    />
  );
}

export default TableChart;
