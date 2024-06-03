import axios from "axios";
import { useState } from "react";

const useAppscript = () => {
  const urlAppscript = import.meta.env.VITE_URL_APPSCRIPT;

  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  const handleDoneDay = async ({ type }) => {
    setIsLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("type", type);
      formData.append("action", "handle_done_day");
      const res = await axios.post(`${urlAppscript}`, formData);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      window.close();
    }
  };
  const handleMark = async ({ type }) => {
    setIsLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("type", type);
      formData.append("action", "handle_mark");
      const res = await axios.post(`${urlAppscript}`, formData);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      window.close();
    }
  };
  return { isLoading, error, handleDoneDay, handleMark };
};
export default useAppscript;
