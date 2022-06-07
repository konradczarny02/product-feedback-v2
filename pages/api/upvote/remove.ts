import { NextApiResponse, NextApiRequest } from 'next';
import prisma from '../../../lib/prisma';

const remove = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, suggestionId } = req.body;
};

export default remove;
