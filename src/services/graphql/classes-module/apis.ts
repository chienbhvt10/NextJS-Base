import { CreateClassInput, UpdateClassInput } from '@/services/graphql-gen';
import GraphqlClientConfig from '@/utils/apollo-config';
import { useQuery } from '@tanstack/react-query';

export const useGetAClassQuery = () => {
  const sdk = GraphqlClientConfig.getSDK(true);
  const data = useQuery({
    queryKey: ['getAClass'],
    queryFn: async () => (await sdk.getAClass({ id: '1' })).getAClass,
  });
  return data;
};

export const useGetAllClassesQuery = () => {
  const sdk = GraphqlClientConfig.getSDK(true);
  const data = useQuery({
    queryKey: ['getAClass'],
    queryFn: async () => (await sdk.getAllClasses()).getAllClasses,
  });
  return data;
};

export const useCreateClassQuery = (input: CreateClassInput) => {
  const sdk = GraphqlClientConfig.getSDK(true);
  const data = useQuery({
    queryKey: ['getAClass'],
    queryFn: async () => (await sdk.createClass({ input })).createClass,
  });
  return data;
};

export const useUpdateClassQuery = (input: UpdateClassInput) => {
  const sdk = GraphqlClientConfig.getSDK(true);
  const data = useQuery({
    queryKey: ['getAClass'],
    queryFn: async () => (await sdk.updateClass({ input })).updateClass,
  });
  return data;
};

export const useDeleteClassQuery = (id: string) => {
  const sdk = GraphqlClientConfig.getSDK(true);
  const data = useQuery({
    queryKey: ['getAClass'],
    queryFn: async () => (await sdk.deleteClass({ id })).deleteClass,
  });
  return data;
};
