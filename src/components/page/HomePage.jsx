import { useEffect, useState } from "react";
import Button from "../common/Button";
import { useParams } from "react-router-dom";
import useAppscript from "../../hooks/useAppscript";

export default function HomePage() {
  const { handleCallAPI, isLoading } = useAppscript();
  const { type } = useParams();
  console.log(type);
  const [isActive, setIsActive] = useState(false);
  const handDoneDay = () => {
    handleCallAPI({ type });
  };
  useEffect(() => {
    if (isLoading) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [isLoading]);
  return (
    <div>
      <Button
        isLoading={isActive}
        title={"Kết ngày thôi"}
        onClick={handDoneDay}
      />
    </div>
  );
}
