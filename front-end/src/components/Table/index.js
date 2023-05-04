import HybridTable from "./HybridTable";
import BitcoinTable from "./BitcoinTable";

import * as S from "./styles";

function Table() {
  return (
    <S.TableContainer>
      <HybridTable />
      <BitcoinTable />
    </S.TableContainer>
  );
}

export default Table;
