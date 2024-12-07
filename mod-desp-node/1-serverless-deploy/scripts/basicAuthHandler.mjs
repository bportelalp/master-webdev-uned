import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb';
import crypto from "crypto";

const client = new DynamoDBClient({ region: 'us-east-1' });
const ddbDocClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    const authHeader = event.headers.Authorization || event.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Basic ')) {
        return generateResult(false);
    }

    const encodedCredentials = authHeader.split(' ')[1];
    const [username, password] = Buffer.from(encodedCredentials, 'base64').toString('utf-8').split(':');

    try {
        const params = {
          TableName: "users",
          FilterExpression: 'userName = :userName', 
          ExpressionAttributeValues: { ':userName': username  }
        };

        const passwordHash = crypto.createHash('sha256').update(password).digest('hex');
        console.log("password hashed:", passwordHash);
        const result = await ddbDocClient.send(new ScanCommand(params));
        let user = undefined;
        if(result.Items.length > 0){}
          user = result.Items[0]
        console.log(`Seek user ${username} on DynamoDB: ${JSON.stringify(user)}`);
        if (user && user.passwordHash === passwordHash) {
            // return generatePolicy(username, 'Allow', event.methodArn);
            return generateResult(true);
        } else {
            // return generatePolicy('user', 'Deny', event.methodArn);
            return generateResult(false);
        }
    } catch (error) {
        console.error('Error al consultar DynamoDB:', error);
        return generateResult(false);
    }
};

const generateResult = (value) => {
    return  {
        isAuthorized: value,
        context: {
        }
    }
}