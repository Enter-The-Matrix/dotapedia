import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

function useLogin() {

    const [loading, setLoading]= useState(false)

    const {setAuthUser}= useAuthContext()
    const login = async( {username, password} )=>{

        try {
            setLoading(true)
            console.log(username,password);

            const res = await axios.post("/api/v1/auth/login",{username:username, password:password})
            console.log("response",res);
            console.log(res.data.username);
            const userInfo ={
                username:res.data.username,
                _id:res.data._id
            }
            localStorage.setItem('user',JSON.stringify(userInfo) )
            setAuthUser(userInfo)
            toast.success(res.data.message);

            setLoading(false)
        } catch (error) {
            toast.error(error.response.data.message)
            console.log("Cannot find username",error.response.data.message);
        }

    }

return {login, loading}


}

export default useLogin