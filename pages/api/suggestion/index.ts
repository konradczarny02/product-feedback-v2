import prisma from '../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const getSuggestions = async (req: NextApiRequest, res: NextApiResponse) => {
  const suggestions = await prisma.suggestion.findMany({});

  if (suggestions) {
    res.status(200);
    res.json(suggestions);
  } else {
    res.status(401);
    res.json({ error: 'No suggestions found' });
  }
};

export default getSuggestions;
