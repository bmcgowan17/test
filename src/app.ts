import { createServer } from 'http';

import express from 'express';

export default function main() {
  const app = express();

  const server = createServer(app);

  // TODO: Make this more functional, read config from env
  const serverOpts = {
    host: '127.0.0.1',
    port: 3000,
  };

  server.listen(serverOpts, () => {
    console.log(`listening at ${serverOpts.host}:${serverOpts.port}`);
  });
}

main();
