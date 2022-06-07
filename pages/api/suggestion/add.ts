import prisma from '../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const addSuggestion = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, details, category } = req.body;

  const result = await prisma.suggestion.create({
    data: {
      title,
      details,
      category,
      status: 'Planned',
    },
  });

  if (result) {
    res.status(200);
    res.json(result);
  } else {
    res.status(401);
    res.json({ error: 'Not able to add new suggestion' });
  }
};

export default addSuggestion;
