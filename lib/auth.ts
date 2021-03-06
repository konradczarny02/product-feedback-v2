import jwt from 'jsonwebtoken';
import { prisma } from './prisma';
import { NextApiRequest, NextApiResponse } from 'next';

interface JwtPayload {
  id: number;
}

export const validateRoute = (handler: any) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies[process.env.COOKIE];

    if (token) {
      let user;

      try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error('Not real user');
        }
      } catch (error) {
        res.status(401);
        res.json({ error: 'Not Authorizied' });
        return;
      }

      return handler(req, res, user);
    }

    res.status(401);
    res.json({ error: 'Not Authorizied' });
  };
};
