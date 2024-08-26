module.exports = {
  myApi: {
    output: {
      mode: 'tags',
      target: 'src/api/generated/Api.ts',
      client: 'react-query',
      override: {
        mutator: {
          path: 'src/api/customInstance.ts',
          name: 'customInstance',
        },
        query: {
          useQuery: true,
        },
        components: {
          schemas: {
            suffix: 'ApiDTO',
          },
          responses: {
            suffix: 'ApiResponse',
          },
          parameters: {
            suffix: 'ApiParams',
          },
          requestBodies: {
            suffix: 'ApiBodies',
          },
        },
      },
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    },
    input: {
      target: 'src/api/swagger-json.json',
    },
  },
};
