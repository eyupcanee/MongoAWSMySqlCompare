import * as AWS from "aws-sdk";

AWS.config.update({
  region: "eu-central-1",
  endpoint: "dynamodb.eu-central-1.amazonaws.com",
  accessKeyId: "AKIATO5CPH6YQ4SSPOHD",
  secretAccessKey: "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",
});

const dynamoDb = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();

export const insertUserViaAws = (data) => {
  var params = {
    TableName: "compare",
    Item: data,
  };

  docClient.put(params, function (err, data) {
    if (err) {
      console.log(`Error : ${err}`);
    } else {
      console.log(`Success : ${data}`);
    }
  });
};
