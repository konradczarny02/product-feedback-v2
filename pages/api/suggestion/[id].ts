import { prisma } from '../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const getSuggestionById = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const suggestion = await prisma.suggestion.findUnique({
    where: {
      id: +id,
    },
  });

  if (!suggestion) {
    res.status(401);
    res.json({ error: `No suggestion found with this id: ${id}` });
  } else {
    res.status(200);
    res.json(suggestion);
  }
};

export default getSuggestionById;
