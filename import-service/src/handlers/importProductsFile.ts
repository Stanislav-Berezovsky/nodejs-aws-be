import { APIGatewayProxyHandler } from "aws-lambda";
import * as AWS from "aws-sdk";

const BUCKET = process.env.BUCKET;

export const importProductsFile: APIGatewayProxyHandler = async (event) => {
  const fileName = event.queryStringParameters.name;
  const filePath = `uploaded/${fileName}`;
  const s3 = new AWS.S3({ region: "eu-west-1" });
  const params = {
    Bucket: BUCKET,
    Key: filePath,
    Expires: 60,
    ContentType: "text/csv",
  };

  return new Promise((res, rej) => {
    s3.getSignedUrl("putObject", params, (err, url) => {
      if (err) {
        return rej(err);
      }

      res({
        statusCode: 200,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: url,
      });
    });
  });
};