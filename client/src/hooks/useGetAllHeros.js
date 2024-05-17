import axios from "axios";
import { useState } from "react";

function useGetAllHeros() {
    const [loading, setLoading] = useState(false);

    const getAllHeros = async () => {
        try {
            setLoading(true);
            const res = await axios.get("/api/v1/heros/getAll");
            setLoading(false);
            return res.data;
        } catch (error) {
            setLoading(false);
            console.log("Cannot find username", error.response?.data?.message || error.message);
            throw error;
        }
    };

    return { loading, getAllHeros };
}

export default useGetAllHeros;
