import axios from "axios";


export  const uploadFile=async(data)=>{
   try{
     let response=await axios.post(`${import.meta.env.VITE_Backend_URL}/upload`,data);
     return response.data;
   }catch(error){console.log("Error in API Calling : ", error.message)}
}
