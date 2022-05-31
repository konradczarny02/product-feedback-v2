import prisma from '../../../lib/prisma';
import { NextApiResponse, NextApiRequest } from 'next';

const getReplies = async (req: NextApiRequest, res: NextApiResponse) => {
  const { parentId } = req.body;
  const response = await prisma.comment.findMany({
    where: {
      parentId,
    },
  });

  if (response) {
    res.status(200);
    res.json(response);
  } else {
    res.status(401);
    res.json({ error: `No replies found` });
  }
};

export default getReplies;
