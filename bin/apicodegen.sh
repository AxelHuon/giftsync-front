#!/bin/bash

export $(grep -v '^#' .env | xargs)
if [ -z "$API_KEY" ]; then
  echo "Erreur : La variable d'environnement API_KEY n'est pas définie."
  exit 1
fi
URL="http://localhost:3001/swagger-json"



curl -H "x-api-key: $API_KEY" $URL > src/api/swagger-json.json

# generate code
rm -rf ./src/api/generated
mkdir ./src/api/generated
npx orval
