import * as AWS from "aws-sdk";

const acKey = process.env.REACT_APP_AWS_KEY;
const acSecretKey = process.env.REACT_APP_AWS_SECRET_KEY;

AWS.config.update({
  region: "eu-central-1",
  endpoint: "dynamodb.eu-central-1.amazonaws.com",
  accessKeyId: acKey,
  secretAccessKey: acSecretKey,
});

const dynamoDb = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();

export const insertUserViaAws = async (data) => {
  var params = {
    TableName: "compare",
    Item: data,
  };

  await docClient.put(params, function (err, data) {
    if (err) {
      console.log(`Error : ${err}`);
    } else {
      console.log(`Success : ${data}`);
    }
  });
};
