import { NextApiResponse, NextApiRequest } from 'next';
import prisma from '../../../lib/prisma';

const remove = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, suggestionId } = req.body;

  const response = await prisma.upvotes.deleteMany({
    where: {
      userId,
      suggestionId,
    },
  });

  if (response) {
    return res.status(200).json(`Post downvoted`);
  }
  return res.status(401).json({ error: `Couldn't downvote post with id: ${suggestionId}` });
};

export default remove;
