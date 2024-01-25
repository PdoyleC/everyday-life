import axios from "axios";

axios.defaults.baseURL = "https://live-life-api-now-f6f9c42b2398.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;