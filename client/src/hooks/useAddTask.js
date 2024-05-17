import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

function useAddTask() {
  const [loading, setLoading] = useState(false);

  const addTask = async (values) => {
    console.log("Values to be send:", values);
    try {
      setLoading(true);
      const res = await axios.post("/api/v1/heros/addHero", values);
      console.log("response:", res);
      toast.success(res.data.message)
      setLoading(false);
    } catch (error) {

      console.log("Cannot find username", error.response.data.message);
    }
  };

  return { loading, addTask };
}

export default useAddTask;
