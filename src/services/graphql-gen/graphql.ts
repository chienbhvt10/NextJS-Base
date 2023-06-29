/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Classes = {
  __typename?: 'Classes';
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  shortName?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getAClass: Classes;
  getAllClasses: Array<Classes>;
};

export type IClassesFragment = { __typename?: 'Classes', id: string, name?: string | null, shortName?: string | null } & { ' $fragmentName'?: 'IClassesFragment' };

export type GetAClassQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAClassQuery = { __typename?: 'Query', getAClass: (
    { __typename?: 'Classes' }
    & { ' $fragmentRefs'?: { 'IClassesFragment': IClassesFragment } }
  ) };

export const IClassesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IClasses"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Classes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}}]}}]} as unknown as DocumentNode<IClassesFragment, unknown>;
export const GetAClassDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAClass"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAClass"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IClasses"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IClasses"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Classes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}}]}}]} as unknown as DocumentNode<GetAClassQuery, GetAClassQueryVariables>;