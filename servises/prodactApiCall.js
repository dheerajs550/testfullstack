import api from "./api";

// GET users
export const apiData = async (userId) => {
  const res = await api.get(`/products ${userId ? "/" + userId : ""}`);
  return res.data;
};

// POST user
export const addProducts = async (userProduct) => {
  const res = await api.post("/products", userProduct);
  return res.data;
};
