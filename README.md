# Rhys's website

## Why?

1. Writing helps me retain knowledge.
2. This allows me to store different types of data in a central place. ( Books, articles, my project insights, my preocesses)
3. I can send links to other people. I have found Trello and Docs to be great tools, but it is difficult to share the data that I have amassed using these tools.

## Tools used:

1. [Docusaurus](https://docusaurus.io/)
2. [Vercel](https://vercel.com/)
3. [GitHub](https://github.com/)

## Installation process for local development

1. system dependencies, common to most web development
   1. VS code, or similar editor
   2. terminal configured to work with this GitHub repository
   3. node.js is installed
2. clone this repository
3. open the folder
4. in a terminal, navigate to the root of the project folder and run npm install

## Installation process, how this website was built

1. created a new repository in GitHub, with the primary branch names as _production_
2. cloned the repository to my computer
3. created and published a new branch named _development_
4. created and published a new feature branch.
   This is how I work, making features in a dedicated branch, and then merging it to _development_ when it is ready.
   Periodically, I will merge _development_ into _production_ so the changes are visible on the actual website _rhysfaultless.com_
5. installed Docusaurus, in the terminal: <code>npx create-docusaurus@latest classic --typescript</code>
   Note that I installed Docusaurus with the TypeScript flag, but you could also choose the default JavaScript.
6. I deleted the generated README, and then copied all the other contencts of the Docusaurus folder _classic_ to the root of my project
7. I started the local development server by running this in a terminal: <code>npm run start</code>
