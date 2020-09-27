import axios from "axios";

const config  = axios.create({
    baseURL:"localhost:8080/"
})

export default config;