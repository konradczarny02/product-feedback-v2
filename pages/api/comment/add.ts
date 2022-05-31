import prisma from '../../../lib/prisma';
import { NextApiResponse, NextApiRequest } from 'next';

const addComment = async (req: NextApiRequest, res: NextApiResponse) => {
  const { content, userId, suggestionId } = req.body;
  const response = await prisma.comment.create({
    data: {
      content,
      suggestion: {
        connect: {
          id: +userId,
        },
      },
      user: {
        connect: {
          id: +suggestionId,
        },
      },
    },
  });
  if (response) {
    res.status(200);
    res.json(response);
  } else {
    res.status(401);
    res.json({ error: 'Not able to add comment' });
  }
};

export default addComment;
