import axios from "axios";



const productionUrl = "https://dummyjson.com/";

export const customFetch = axios.create({
    baseURL : productionUrl
})

