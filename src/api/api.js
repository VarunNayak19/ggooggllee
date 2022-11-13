import axios from "axios"

export default axios.create({
    baseURL: "https://real-time-web-search.p.rapidapi.com/search",
})