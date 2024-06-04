import axios from "axios";
import { useState } from "react";

const useAppscript = () => {
  const urlAppscript = import.meta.env.VITE_URL_APPSCRIPT;

  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  const handleDoneDay = async ({ type, isChange }) => {
    setIsLoading(true);
    setError(null);
    try {
      const formData1 = new FormData();
      formData1.append("type", type);
      formData1.append("isChange", isChange);
      formData1.append("action", "handle_done_day");
      await axios.post(`${urlAppscript}`, formData1);

      const formData2 = new FormData();
      formData2.append("type", type);
      formData2.append("action", "handle_mark");
      await axios.post(`${urlAppscript}`, formData2);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleReport = async ({ type }) => {
    setIsLoading(true);
    setError(null);
    try {
      const formData1 = new FormData();
      formData1.append("type", type);
      formData1.append("action", "handle_report");
      const res = await axios.post(`${urlAppscript}`, formData1);
      return res.data;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, handleDoneDay, handleReport };
};
export default useAppscript;
