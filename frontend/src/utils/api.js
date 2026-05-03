import axios from "axios";

const normalizeApiUrl = (apiUrl) => {
  const trimmedUrl = apiUrl?.trim();

  if (!trimmedUrl) {
    return "";
  }

  try {
    const parsedUrl = new URL(trimmedUrl, window.location.origin);

    if (parsedUrl.pathname === "/" || parsedUrl.pathname === "") {
      parsedUrl.pathname = "/api";
    }

    return parsedUrl.pathname === "/api"
      ? parsedUrl.toString().replace(/\/$/, "")
      : trimmedUrl.replace(/\/$/, "");
  } catch {
    return trimmedUrl.replace(/\/$/, "");
  }
};

const configuredApiUrl = import.meta.env.VITE_API_URL?.trim();
const baseURL = configuredApiUrl
  ? normalizeApiUrl(configuredApiUrl)
  : import.meta.env.DEV
    ? "http://localhost:7001/api"
    : "/api";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchProjects = async () => {
  const { data } = await api.get("/projects");

  if (Array.isArray(data)) {
    return data;
  }

  if (Array.isArray(data?.data)) {
    return data.data;
  }

  if (Array.isArray(data?.projects)) {
    return data.projects;
  }

  throw new Error("Projects response did not include a project list.");
};

export const submitContact = async (payload) => {
  const { data } = await api.post("/contacts", payload);
  return data;
};

export default api;
