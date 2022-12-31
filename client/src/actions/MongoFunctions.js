import axios from "axios";

//const baseUrl = process.env.MONGO_URL;
const baseUrl = process.env.REACT_APP_MONGO_URL;

export const insertUserViaMongo = (user) =>
  axios.post(`${baseUrl}general/user/insert`, user);
