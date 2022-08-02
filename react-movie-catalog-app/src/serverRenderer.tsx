import React from 'react';
import { renderToString } from 'react-dom/server';
import {Application} from './components/Application';

function renderHTML(html : string) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req : any, res : any) => {
    const htmlString = renderToString(<Application/>);
    res.send(renderHTML(htmlString));
  };
}
