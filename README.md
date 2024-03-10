This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Docker Configuration

We utilize `docker-compose` for easy management of multiple containers that work together in this project.

## Starting Services

To start the services defined in `docker-compose.yml`, run the following command:

```bash
docker-compose up -d
```

This command will start the containers in the background. To stop and remove the containers, you can use:

```bash
docker-compose down
```

## Container Services

db: A container for the MySQL database.
phpmyadmin: A container for PHPMyAdmin to manage the database through a web browser.
Volumes
mysql-data: A volume to persist database data so that it's not lost when the container is removed.
Accessing phpMyAdmin
To manage the database using phpMyAdmin, visit http://localhost:8080 in your web browser.

Login credentials:

Username: root
Password: my-secret-pw (or whatever password you set in docker-compose.yml)

## Prisma Setup

To get started with Prisma, follow these steps:

```bash
prisma init
```

Configure the .env file with the database access details.
Update the Prisma schema (prisma/schema.prisma) with the appropriate database model.
Apply changes to the database:

```bash
prisma migrate dev
```

Generate the Prisma client:

```bash
prisma generate
```
