#!/bin/bash

npm install
npm run build
rm -r node_modules
npm install --omit=dev
npx typeorm migration:run
node dist/main.js
#chmod +x .docker/entrypoint.sh  --permissão de execução
