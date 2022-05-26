import prisma from '../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const deleteSuggestion = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title } = req.body;

  const deleted = await prisma.suggestion.delete({
    where: {
      title,
    },
  });

  if (!deleted) {
    res.status(401);
    res.json({ error: `Not able to remove suggestion with title: ${title}` });
  } else {
    res.status(200);
    res.json(deleted);
  }
};

export default deleteSuggestion;
