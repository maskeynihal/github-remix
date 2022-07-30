import axios from "axios";
import config from "config";

const instance = axios.create({
  baseURL: config.api.github.base,
  headers: {
    Authorization: "token " + config.api.github.accessToken,
    "Content-Type": "application/json",
  },
});

export default instance;
