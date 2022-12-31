import React, { useState } from "react";

import { insertUserViaAws } from "./actions/AwsFunctions";
import { insertUserViaMongo } from "./actions/MongoFunctions";
import { insertUserViaMySql } from "./actions/MySqlFunctions";

function App() {
  const [timeTookAWS, setTimeTookAWS] = useState();
  const [timeTookMongo, setTimeTookMongo] = useState();
  const [timeTookMySQL, setTimeTookMySQL] = useState();
  const [numberOfRecord, setNumberOfRecord] = useState(0);
  const [awsId, setAwsId] = useState(0);
  const [mongoId, setMongoId] = useState(0);
  const [mysqlId, setMysqlId] = useState(0);

  const handleAWS = () => {
    const t0 = performance.now();
    for (let i = 0; i < numberOfRecord; i++) {
      const userAWS = {
        id: parseInt(awsId, 10),
        name: "Eyup Can",
        surname: "Esen",
        email: "eyupcanee@gmail.com",
        phoneNumber: "5465933941",
      };
      insertUserViaAws(userAWS);
      setMysqlId(awsId + 1);
    }
    const t1 = performance.now();
    setTimeTookAWS(t1 - t0);
  };

  const handleMongo = () => {
    const t0 = performance.now();
    for (let i = 0; i < numberOfRecord; i++) {
      const userMongo = {
        id: mongoId,
        name: "Eyup Can",
        surname: "Esen",
        email: "eyupcanee@gmail.com",
        phoneNumber: "5465933941",
      };
      insertUserViaMongo(userMongo)
        .then((res) => {
          console.log(res);
          setMysqlId(mongoId + 1);
        })
        .catch((err) => {
          console.log(err);
          setMysqlId(mongoId + 1);
        });
    }
    const t1 = performance.now();
    setTimeTookMongo(t1 - t0);
  };

  const handleMySql = () => {
    const t0 = performance.now();
    for (let i = 0; i < numberOfRecord; i++) {
      const userMySQL = {
        id: mysqlId,
        name: "Eyup Can",
        surname: "Esen",
        email: "eyupcanee@gmail.com",
        phoneNumber: "5465933941",
      };
      insertUserViaMySql(userMySQL)
        .then((res) => {
          console.log(res);
          setMysqlId(mysqlId + 1);
        })
        .catch((err) => {
          console.log(err);
          setMysqlId(mysqlId + 1);
        });
    }
    const t1 = performance.now();
    setTimeTookMySQL(t1 - t0);
  };
  return (
    <div className="App">
      <h2>HELLO</h2>
      <h3>Kaç Adet Kayıt Girmesini İstiyorsunuz ?</h3>
      <input
        type="number"
        onChange={(e) => setNumberOfRecord(e.target.value)}
      ></input>
      <br></br>
      <button onClick={handleAWS}>Insert With AWS</button>
      <button onClick={handleMongo}>Insert With Mongo</button>
      <button onClick={handleMySql}>Insert With MySql</button>
      {timeTookMongo && <h3>Mongo şu kadar sürdü : {timeTookMongo}</h3>}
      {timeTookAWS && <h3>AWS şu kadar sürdü : {timeTookAWS}</h3>}
      {timeTookMySQL && <h3>MySQL şu kadar sürdü : {timeTookMySQL}</h3>}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h3>AWS Hangi Id'den Başlasın</h3>
      <input type="number" onChange={(e) => setAwsId(e.target.value)}></input>
      <h3>MongoDB Hangi Id'den Başlasın</h3>
      <input type="number" onChange={(e) => setMongoId(e.target.value)}></input>
      <h3>MYSQL Hangi Id'den Başlasın</h3>
      <input type="number" onChange={(e) => setMysqlId(e.target.value)}></input>
    </div>
  );
}

export default App;
