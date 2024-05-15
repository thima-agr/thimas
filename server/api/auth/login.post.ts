import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '~/server/utils/fbConfig';

import hashPassword from '~/server/utils/hashPassword';
import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const userCollection = collection(db, 'Users');

  const q = query(
    userCollection,
    where('email', '==', body.email),
    where('password', '==', hashPassword(body.password))
  );

  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    const doc = snapshot.docs[0];

    if (doc.exists()) {
      const data = {
        email: doc.data().email,
        id: doc.data().id,
      };

      // Cria o token de autenticação
      const secret = useRuntimeConfig().public.secretJwt;
      const token = jwt.sign(data, secret, { expiresIn: '1h' });

      // Salva o cookie de autenticação
      setCookie(event, 'th-auth-token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 3600000,
      });
    } else {
      throw createError({
        message: "Email e/ou senha inválidos",
        statusCode: 404,
      })
    }
  } else {
    return { message: 'Email e/ou senha inválidos' };
  }
});
