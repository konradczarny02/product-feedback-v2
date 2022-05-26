import prisma from '../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const editSuggestion = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, category, status, details } = req.body;

  const suggestion = await prisma.suggestion.update({
    where: {
      title,
    },
    data: {
      title,
      category,
      status,
      details,
    },
  });

  if (suggestion) {
    res.status(200);
    res.json(suggestion);
  } else {
    res.status(401);
    res.json({ error: `Couldn't update suggestion with title: ${title}` });
  }
};

export default editSuggestion;
