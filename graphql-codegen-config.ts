import { ApiServerURL } from '@/utils/config';
import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: ApiServerURL,
  documents: 'src/**/*.graphql',
  generates: {
    'src/services/graphql-gen.ts': {
      preset: 'client',
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
