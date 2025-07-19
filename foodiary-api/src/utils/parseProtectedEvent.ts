import { APIGatewayProxyEventV2 } from 'aws-lambda';
import { HttpRequest, ProtectedHttpRequest } from '../types/Http';
import { parseEvent } from './parseEvent';
import { validateAcessToken } from '../lib/jwt';

export function parseProtectedEvent(event: APIGatewayProxyEventV2): ProtectedHttpRequest {
  const baseEvent = parseEvent(event);

    const {authorization} = event.headers;

    if(!authorization){
        throw new Error('acess token not provided');
    }

    const [, token] = authorization.split(' ');
    const userId = validateAcessToken(token);

    if(!userId){
        throw new Error('invalid acess token')
    }

  return {
    ...baseEvent,
    userId,

  };
}