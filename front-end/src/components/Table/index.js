import HybridTable from "./HybridTable";
import BitcoinTable from "./BitcoinTable";
import { DatePicker } from "antd";
import * as S from "./styles";
import { useState } from "react";
import dayjs from "dayjs";

function Table() {
  const dateFormat = "YYYY-MM-DD";
  const { RangePicker } = DatePicker;
  const [date, setDate] = useState({
    startDate: dayjs().format(dateFormat),
    endDate: dayjs().format(dateFormat),
  });

  return (
    <S.Wrap>
      <RangePicker
        allowClear={false}
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
        {/* 선택한 date 값 전달 */}
        <HybridTable date={date} />
        <BitcoinTable date={date} />
      </S.TableContainer>
    </S.Wrap>
  );
}

export default Table;
