import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
import crypto from "crypto";

const ddbDocClient = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export const handler = async (event, context) => {
  try {
    const user = JSON.parse(event.body);
    const passwordHash = crypto.createHash('sha256').update(user.password).digest('hex');

    const equivalent = await ddbDocClient.send(new ScanCommand({
      TableName: "users",
      FilterExpression: 'userName = :userName', 
      ExpressionAttributeValues: { ':userName': user.userName  }
    }));


    if(equivalent.Items.length > 0){
      return {
        statusCode: 409,
        body: JSON.stringify(`There is an user with the same username`),
      };
    }

    const newUser = {
      userName: user.userName,
      passwordHash: passwordHash,
      id: crypto.randomUUID(),
    };
    await ddbDocClient.send(new PutCommand({
      TableName: "users",
      Item: newUser,
    }));

    return {
      statusCode: 201,
      body: JSON.stringify(newUser),
    };
  }
  catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};