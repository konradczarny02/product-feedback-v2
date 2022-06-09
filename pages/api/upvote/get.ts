import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

const get = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, suggestionId } = req.body;

  const response = await prisma.upvotes.findMany({
    where: {
      userId,
      suggestionId,
    },
  });

  if (response.length > 0) {
    return res.status(200).json('Post upvoted');
  }
  return res.status(200).json('Post not upvoted');
};

export default get;
