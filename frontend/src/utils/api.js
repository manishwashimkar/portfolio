import axios from "axios";

const configuredApiUrl = import.meta.env.VITE_API_URL?.trim();
const baseURL = configuredApiUrl
  ? configuredApiUrl.replace(/\/$/, "")
  : import.meta.env.DEV
    ? "http://localhost:5000/api"
    : "/api";

const api = axios.create({
  baseURL,
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
