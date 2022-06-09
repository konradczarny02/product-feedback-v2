import { prisma } from '../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const reply = async (req: NextApiRequest, res: NextApiResponse) => {
  const { parentId, content, userId, suggestionId } = req.body;
  const response = await prisma.comment.create({
    data: {
      content,
      parentId: +parentId,
      userId: +userId,
      suggestionId: +suggestionId,
    },
  });
  if (response) {
    res.status(200);
    res.json(response);
  } else {
    res.status(401);
    res.json({ error: `Not able to reply to comment: ${parentId}` });
  }
};

export default reply;
