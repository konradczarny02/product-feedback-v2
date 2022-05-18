import prisma from '../../lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import { NextApiResponse, NextApiRequest } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        time: Date.now(),
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '24h',
      }
    );

    res.setHeader(
      'Set-Cookie',
      cookie.serialize(process.env.COOKIE, token, {
        httpOnly: true,
        maxAge: 24 * 3600,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      })
    );

    res.json(user);
  } else {
    res.status(401);
    res.json({ error: 'Email or Password is wrong' });
  }
};
