import HybridTable from "./HybridTable";
import BitcoinTable from "./BitcoinTable";
import { DatePicker } from "antd";
import * as S from "./styles";
import { useState } from "react";
import dayjs from "dayjs";

function Table() {
  const { RangePicker } = DatePicker;
  const [date, setDate] = useState({
    startDate: dayjs(),
    endDate: dayjs(),
  });

  const dateFormat = "YYYY-MM-DD";
  return (
    <S.Wrap>
      <RangePicker
        allowClear={false}
        //disabledDate={(date) => isBefore(new Date(), date)}
        //value={[new Date(), new Date()]}
        defaultValue={[
          dayjs(date.startDate, dateFormat),
          dayjs(date.startDate, dateFormat),
        ]}
        size="large"
        style={{ width: "49%" }}
        onCalendarChange={(_, date) => {
          const [startDate, endDate] = date;
          setDate({
            startDate: startDate,
            endDate: endDate,
          });
        }}
      />
      <S.TableContainer>
        <HybridTable />
        <BitcoinTable />
      </S.TableContainer>
    </S.Wrap>
  );
}

export default Table;
