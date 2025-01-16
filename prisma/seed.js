const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { name: 'Alice', email: 'alice@example.com',password:'$2b$12$7Bjb15mpn8/zSU/3cX.Hdu8RqcR5TL3oK8Nl3l1erF1Cma5wyotWu' },
      { name: 'Bob', email: 'bob@example.com',password:'$2b$12$7Bjb15mpn8/zSU/3cX.Hdu8RqcR5TL3oK8Nl3l1erF1Cma5wyotWu' },
    ],
  });
  console.log('Seed data created.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });