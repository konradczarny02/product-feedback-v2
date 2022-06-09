import { prisma } from '../../../lib/prisma';
import { NextApiResponse, NextApiRequest } from 'next';

const getStatus = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await prisma.suggestion.groupBy({
    by: ['status'],
    _count: {
      status: true,
    },
  });

  if (response) {
    const status = {
      'In-Progress': response[0]._count.status,
      Live: response[1]._count.status,
      Planned: response[2]._count.status,
    };
    return res.status(200).json(status);
  }
  return res.status(401).json({ error: `Couldn't get statuses` });
};

export default getStatus;
