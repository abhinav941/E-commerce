import axios from "axios.config";

const service = {
    getAllEvents: async ()=>{
        const response = await axios.get("getEvents");
        return response.data;//JSON format
    },
}

export default service;