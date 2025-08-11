import axios from "axios";

const baseUrl = "http://127.0.0.1:7000/";
let refresh = false;

const AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

AxiosInstance.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 && !refresh) {
      refresh = true;
      console.log(localStorage.getItem("refresh_token"));
      const response = await AxiosInstance.post(
        "http://localhost:8000/token/refresh/",
        {
          refresh: localStorage.getItem("refresh_token"),
        }
      );
      if (response.status === 200) {
        AxiosInstance.defaults.headers.common["Authorization"] = `Bearer 
       ${response.data["access"]}`;
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        return AxiosInstance(error.config);
      }
    }
    refresh = false;
    return error;
  }
);

export default AxiosInstance;
