import axios from "axios";

const instance = axios.create({
  baseURL: "https://kohihihihi.herokuapp.com",
});

export default instance;
