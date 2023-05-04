import HybridTable from "./HybridTable";
import BitcoinTable from "./BitcoinTable";
import { DatePicker } from "antd";
import * as S from "./styles";
import { useState } from "react";

function Table() {
  const { RangePicker } = DatePicker;
  const [date, setDate] = useState({ startDate: "", endDate: "" });
  return (
    <div>
      <RangePicker
        allowClear={false}
        //disabledDate={(date: Date) => isBefore(new Date(), date)}
        //value={[new Date(startDate), new Date(endDate)]}
        size="large"
        style={{ width: "50%" }}
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
    </div>
  );
}

export default Table;
