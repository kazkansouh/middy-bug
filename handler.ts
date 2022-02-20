import middy from "@middy/core";
import { APIGatewayProxyHandler } from "aws-lambda";

const gatewayHandler: APIGatewayProxyHandler = async (event, context) => {
  const response = {
    result: "success",
    message: "payment processed correctly",
  };
  return { statusCode: 200, body: JSON.stringify(response) };
};

export const handler = middy(gatewayHandler);
