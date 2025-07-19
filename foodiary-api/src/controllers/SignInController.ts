
import { eq } from 'drizzle-orm';
import { db } from '../db';
import { usersTable } from '../db/schema';
import { HttpRequest, HttpResponse } from '../types/Http';
import { badRequest, ok, unauthorized } from '../utils/http';
import { z } from 'zod';
import { compare } from 'bcryptjs'
import { sign} from 'jsonwebtoken';
import { signAccessTokenFor } from '../lib/jwt';

const schema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export class SignInController {
  static async handle({ body }: HttpRequest): Promise<HttpResponse> {
    const { success, error, data } = schema.safeParse(body);
    
    if(!success){
      return badRequest({ errors: error.issues});
    }

    const user = await db.query.usersTable.findFirst({
          columns: {
            id: true,
            email: true, 
            password: true,
          },
          where: eq(usersTable.email, data.email)
        });

    if(!user){
      return unauthorized({error: 'invalid credentials'})
    }

    const isPasswordValid = await compare(data.password, user.password);

    if(!isPasswordValid ){
      return unauthorized({error: 'invalid credentials'})
    }

    const accessToken = signAccessTokenFor(user.id);

    return ok({ accessToken });
  }
}
