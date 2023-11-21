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
