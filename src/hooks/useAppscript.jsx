import axios from "axios";
import { useState } from "react";

const useAppscript = () => {
  const urlAppscript = import.meta.env.VITE_URL_APPSCRIPT;

  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  const handleCallAPI = async ({ type }) => {
    setIsLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("type", type);
      const res = await axios.post(`${urlAppscript}`, formData);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, handleCallAPI };
};
export default useAppscript;
