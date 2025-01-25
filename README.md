## Deployed on Vercel

link:- https://nextjsinv.vercel.app/ 


## Project setup 



```bash

First,install the dependencies :

npm install --force && npx prisma generate

Then,run the development server:
# then
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


## Getting Started with database

npm install prisma @prisma/client sqlite3

npx prisma init

npx prisma migrate dev --name init

npx prisma migrate

npx prisma generate
# run in the bash for database seeding
node prisma/seed.js






Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More
# Jest set up done for unit testing
To run test
run:-  npm test




