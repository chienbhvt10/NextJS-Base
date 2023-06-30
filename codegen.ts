import { ApiServerGrapqhlURL } from './src/utils/config';
import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: ApiServerGrapqhlURL,
  documents: ['src/**/*.graphql'],
  generates: {
    './src/services/graphql-gen.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        useTypeImports: true,
        omitOperationSuffix: true,
        namingConvention: 'pascal-case#pascalCase',
      },
    },
  },
};
export default config;
