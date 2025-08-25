import { BASE_URL } from "@/lib/apiurl";
import axios from "axios";

const api = axios.create({
  baseURL: `${BASE_URL}`, // backend ka base url
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;