import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchProjects = async () => {
  const { data } = await api.get("/projects");
  return data.data;
};

export const submitContact = async (payload) => {
  const { data } = await api.post("/contacts", payload);
  return data;
};

export default api;

