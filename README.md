This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, pull project + install package using yarn or npm or pnpm:

```bash
yarn
```

Second, run the development server:

```bash
yarn dev
```

Every update api from graphql, run this command for generate api and type

```bash
yarn code gen
#or
yarn codegen-ts
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project structure

```
Project structure root tree
|
│   README.md                       --- Project guide
│   .env                            --- Project environment variables
│   .eslintrc.json                  --- Eslint configuration for project
|   .gitignore                      --- Git ignore configuration
|   .prettierignore                 --- Prettier ignore configuration for project
|   .prettierrc                     --- Prettier configuration for project
|   codegen.yml                     --- Graphql code generation configuration for project file yml
|   graphql-codegen-config.ts       --- Graphql code generation configuration for project file ts
|   next.config.js                  --- Nextjs custom configuration for project
|   package.json                    --- Nodemodules dependencies configuration and installation for project
|   tsconfig.json                   --- Typescript configuration for project
|   yarn.lock                       --- Save yarn lock file when install package
|
└───Public directory
|   |
│   └───images directory            --- Save images file
│
└───Src directory
|   |
│   └───app directory               --- Save pages routers and views
|   |
│   └───components directory        --- Save components common for all modules in project
|   |
│   └───constants directory         --- Save constants
|   |
│   └───contexts directory          --- Save defined contexts
|   |
│   └───hoc directory               --- Save defined custom HOC
|   |
│   └───hooks directory             --- Save defined custom hooks
|   |
│   └───layouts directory           --- Save defined layouts
|   |
│   └───services directory          --- Save defined services
│   |   |
|   |   └───apis directory          --- Save defined apis from axios and servers
│   |   |
|   |   └───graphql directory       --- Save defined apis from graphql servers
|   |
|   |   grapql-codegen.ts           --- Save graphql codegen file
│   |
│   └───theme directory             --- Save defined theme
|   |
│   └───types directory             --- Save defined types
|   |
│   └───utils directory             --- Save defined utils functions or configuration


```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
