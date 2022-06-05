import { NextApiResponse, NextApiRequest } from 'next';
import { serialize } from 'cookie';

const signout = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader(
    'Set-Cookie',
    serialize(process.env.COOKIE, '', {
      httpOnly: true,
      maxAge: -1,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    })
  );

  res.status(200);
  res.json({ success: `signed out` });
};

export default signout;
