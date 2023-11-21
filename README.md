# Rhys's website

## Why?

1. Writing helps me remember things.
2. This allows me to store different types of data in a central place. ( Books, articles, my project insights, my processes).
3. I can send links to other people.
   I have found Trello and Docs to be great tools, but it is difficult to share the data that I have amassed using these tools.

## Deployment tools:

1. [GitHub](https://github.com/)
2. [Vercel](https://vercel.com/)
3. [Namecheap](https://www.namecheap.com/)

## Web development tools:

1. [React](https://reactjs.org/) with [Docusaurus](https://docusaurus.io/docs).
2. [MDX markdown](https://mdxjs.com/) for React.
3. [KaTex](https://katex.org/) for equations.
4. [Streamline UI components](https://home.streamlinehq.com/).
5. [Infima](https://infima.dev), a style tool included with Docusaurus.

## Installation process for local development

1. In system dependencies, common to most web development.
   1. VS code, or similar editor.
   2. A shell / terminal configured to work with this GitHub repository.
   3. Node.js version 16 or later is installed.
2. Clone this repository.
3. Open the folder in your text editor.
4. In a terminal, navigate to the root of the project folder and run `npm install` to install everything listed in the _package.json_.
5. Run `npm run start` to start a local web server.
6. A new tab should open in you default web browser to the landing page of the Docusaurus site.
   The default address is <http://localhost:3000/> assuming you don't have any other local web servers running.

## Equations using KaTex

- [KaTex syntax](https://katex.org/docs/supported.html)
- [KaTex tool for testing syntax](https://katex.org/)

The packages are installed to your development computer or to the web server through the _package.json_ of this repository.
These are installed when you run `npm install` after cloning the repository.
Katex is sourced globally in _docusaurus.config.js_, so you do not need to import it to your Markdown files.

### Example, Ohm's Law

- Rendered:

  $$
  I=\cfrac{V}{R}
  $$

- Source:
  ```
  $$
  I=\cfrac{V}{R}
  $$
  ```
## Vercel Analytics

This site is deployed with Vercel, and uses their Analytics tool.
Unlike a standard React site, Docusaurus does not expose an `_App.js` file.
Vercel requires this top level file to run an Analytics function—only once—for all browsing of the React website.
I added this functionality by Swizzling the Root of Docusaurus, by:

- creating a folder /src/theme
- creating a file /src/theme/Root.js

Then I was able to run the `<Analytics />` function per [Vercel's guide](https://vercel.com/docs/analytics/quickstart).

```javascript
//  /src/theme/Root.js

import React from 'react';
import { Analytics } from '@vercel/analytics/react';

function Root({children}) {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
}

export default Root;

```