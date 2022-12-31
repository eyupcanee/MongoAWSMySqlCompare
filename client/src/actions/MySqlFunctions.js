import axios from "axios";

const baseUrl = process.env.REACT_APP_MYSQL_URL;

export const insertUserViaMySql = (user) =>
  axios.post(`${baseUrl}mysql/user/insert`, user);

/*
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

export const connectDb = async () => {
  await connection.connect();
};

export const closeDb = async () => {
  await connection.close();
};

export const insertUserViaMySql = async (data) => {
  const query = `INSERT INTO compare (name,surname,email,phoneNumber) VALUES (${data.name},${data.surname},${data.email},${data.phoneNumber})`;
  await connection.execute(query);
}*/
