import { validateRoute } from '../../../lib/auth';
import { NextApiRequest, NextApiResponse } from 'next';
import { IUser } from '../../../types/types';

export default validateRoute((req: NextApiRequest, res: NextApiResponse, user: IUser) => {
  const { password, createdAt, updatedAt, ...rest } = user;
  res.json(rest);
});
