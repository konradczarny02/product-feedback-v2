import { prisma } from '../../../lib/prisma';
import { NextApiResponse, NextApiRequest } from 'next';

const countSuggestions = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await prisma.suggestion.count({});

  if (response) {
    return res.status(200).json(response);
  } else {
    return res.status(401).json({ error: `Can't get number of suggestions` });
  }
};

export default countSuggestions;
