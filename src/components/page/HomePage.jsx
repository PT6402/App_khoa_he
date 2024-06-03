import { useEffect, useState } from "react";
import Button from "../common/Button";
import { useParams } from "react-router-dom";
import useAppscript from "../../hooks/useAppscript";
import CardItem from "./CardItem";
import DialogItem from "../common/DialogItem";

export default function HomePage() {
  const { handleDoneDay, isLoading, handleReport } = useAppscript();
  const { type } = useParams();
  const [dataReport, setDataReport] = useState();
  const [isActive, setIsActive] = useState(false);
  const [isActiveCard, setIsActiveCard] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const handDoneDay = async () => {
    await handleDoneDay({ type });
    setShowDialog(true);
  };
  const handleCheckName = () => {
    switch (type) {
      case "CAN":
        return "Cần";
      case "NIEM":
        return "Niệm";
      case "TRI":
        return "Trí";
      case "DAO":
        return "Đạo";
      default:
        return type;
    }
  };
  useEffect(() => {
    if (isLoading && dataReport) {
      setIsActive(true);
    } else if (!isLoading && dataReport) {
      setIsActive(false);
    } else if (isLoading && !dataReport) {
      setIsActiveCard(false);
    } else if (!isLoading && !dataReport) {
      setIsActiveCard(true);
    }
  }, [isLoading]);

  useEffect(() => {
    handleReport({ type }).then((res) => setDataReport(res));
  }, []);
  return (
    <div className="flex items-center justify-center flex-col pt-5 min-h-screen relative">
      {showDialog && <DialogItem />}
      <h1 className="font-bold sm:text-2xl ">
        Hi! H.Trưởng C.{handleCheckName()} nè
      </h1>
      {dataReport && <CardItem dataReport={dataReport} />}
      <Button
        isLoading={isActive}
        title={"Kết ngày thôi"}
        onClick={handDoneDay}
      />
    </div>
  );
}
