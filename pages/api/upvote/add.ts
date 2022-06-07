import prisma from '../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const add = async (req: NextApiRequest, res: NextApiResponse) => {
  const { suggestionId, userId } = req.body;

  const upvote = await prisma.upvotes.create({
    data: {
      suggestionId,
      userId,
    },
  });

  if (upvote) {
    return res.status(200).json('Success');
  }
  return res.status(401).json({ error: `Couldn't upvote` });
};

export default add;
