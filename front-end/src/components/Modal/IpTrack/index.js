import * as S from "./styles";

function IpTrack(props) {
  const { open, close, ip } = props;
  return (
    <S.CustomModal
      title={"Information"}
      visible={open}
      onCancel={close}
      closable={true}
      centered
      footer={null}
      width={950}
      bodyStyle={{ height: 600 }}
    ></S.CustomModal>
  );
}

export default IpTrack;
