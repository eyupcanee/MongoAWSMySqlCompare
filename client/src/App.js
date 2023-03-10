import React, { useState } from "react";

import { insertUserViaAws } from "./actions/AwsFunctions";
import { insertUserViaMongo } from "./actions/MongoFunctions";
import { insertUserViaMySql } from "./actions/MySqlFunctions";

function App() {
  const [timeTookAWS, setTimeTookAWS] = useState();
  const [timeTookMongo, setTimeTookMongo] = useState();
  const [timeTookMySQL, setTimeTookMySQL] = useState();
  const [numberOfRecord, setNumberOfRecord] = useState(0);
  const [id1, setId1] = useState(0);
  const [id2, setId2] = useState(0);
  const [id3, setId3] = useState(0);
  //const [awsId, setAwsId] = useState(0);
  var awsId = id1;
  var mongoId = id2;
  var mysqlId = id3;

  const handleAWS = () => {
    const t0 = performance.now();
    for (let i = 0; i < numberOfRecord; i++) {
      insertUserViaAws({
        id: parseInt(awsId, 10),
        name: "Eyup Can",
        surname: "Esen",
        email: "eyupcanee@gmail.com",
        phoneNumber: "5465933941",
      });

      ++awsId;

      console.log(awsId);
    }
    const t1 = performance.now();
    setTimeTookAWS(t1 - t0);
  };

  const handleMongo = () => {
    const t0 = performance.now();
    for (let i = 0; i < numberOfRecord; i++) {
      insertUserViaMongo({
        id: mongoId,
        name: "Eyup Can",
        surname: "Esen",
        email: "eyupcanee@gmail.com",
        phoneNumber: "5465933941",
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      ++mongoId;
    }
    const t1 = performance.now();
    setTimeTookMongo(t1 - t0);
  };

  const handleMySql = () => {
    const t0 = performance.now();
    for (let i = 0; i < numberOfRecord; i++) {
      insertUserViaMySql({
        id: mysqlId,
        name: "Eyup Can",
        surname: "Esen",
        email: "eyupcanee@gmail.com",
        phoneNumber: "5465933941",
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      ++mysqlId;
    }
    const t1 = performance.now();
    setTimeTookMySQL(t1 - t0);
  };
  return (
    <div className="App">
      <h2>HELLO</h2>
      <h3>Ka?? Adet Kay??t Girmesini ??stiyorsunuz ?</h3>
      <input
        type="number"
        onChange={(e) => setNumberOfRecord(e.target.value)}
      ></input>
      <br></br>
      <button onClick={handleAWS}>Insert With AWS</button>
      <button onClick={handleMongo}>Insert With Mongo</button>
      <button onClick={handleMySql}>Insert With MySql</button>
      {timeTookMongo && <h3>Mongo ??u kadar s??rd?? : {timeTookMongo}</h3>}
      {timeTookAWS && <h3>AWS ??u kadar s??rd?? : {timeTookAWS}</h3>}
      {timeTookMySQL && <h3>MySQL ??u kadar s??rd?? : {timeTookMySQL}</h3>}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h3>AWS Hangi Id'den Ba??las??n</h3>
      <input
        type="number"
        onChange={(e) => {
          setId1(e.target.value);
          console.log(awsId);
        }}
      ></input>
      <h3>MongoDB Hangi Id'den Ba??las??n</h3>
      <input
        type="number"
        onChange={(e) => {
          setId2(e.target.value);
          console.log(mongoId);
        }}
      ></input>
      <h3>MYSQL Hangi Id'den Ba??las??n</h3>
      <input
        type="number"
        onChange={(e) => {
          setId3(e.target.value);
          console.log(mysqlId);
        }}
      ></input>
    </div>
  );
}

export default App;
