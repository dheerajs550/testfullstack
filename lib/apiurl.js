// export const BASE_URL = "http://localhost:3000/api";


let BASE_URL = "";

if (typeof window !== "undefined") {
  // Browser side (jab client me chalega)
  BASE_URL = window.location.origin + "/api";
} else {
  // Server side (Next.js SSR / API calls ke time)
  // BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
  
  // Server side (Next.js SSR / API calls)
  BASE_URL = process.env.NEXT_PUBLIC_API_URL + "/api" || "http://localhost:3000/api";

}

export { BASE_URL };

export const Products_URL = `${BASE_URL}/products`;

