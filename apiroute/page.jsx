import { BASE_URL } from "@/lib/apiurl";

export const apiData = async (userId) => {
    let data = await fetch(`${BASE_URL}/users${userId ? "/" + userId : ""}`);
    data = await data.json();
    return data;
}
