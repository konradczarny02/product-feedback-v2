import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { suggestions } from './suggestionsData';

const prisma = new PrismaClient();

const run = async () => {
  await Promise.all(
    suggestions.map(async (suggestion) => {
      return prisma.suggestion.upsert({
        where: { title: suggestion.title },
        update: {},
        create: {
          title: suggestion.title,
          details: suggestion.details,
          status: suggestion.status,
          upvotes: suggestion.upvotes,
          category: suggestion.category,
        },
      });
    })
  );

  const salt = bcrypt.genSaltSync();
  const user = await prisma.user.upsert({
    where: { email: 'user@test.com' },
    update: {},
    create: {
      firstName: 'John',
      lastName: 'Smith',
      email: 'user@test.com',
      userName: 'johnsmith',
      password: bcrypt.hashSync('password', salt),
    },
  });
};

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
