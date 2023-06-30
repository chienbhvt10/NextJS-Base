const ApiServerURL = process.env.NEXT_PUBLIC_BASE_URL
  ? process.env.NEXT_PUBLIC_BASE_URL
  : 'http://localhost:3000';

const ApiServerGrapqhlURL = process.env.NEXT_PUBLIC_BASE_URL_GRAPHQL
  ? process.env.NEXT_PUBLIC_BASE_URL_GRAPHQL
  : 'http://192.168.35.157:3000/graphql';

const version = process.env.NEXT_PUBLIC_VERSION;

export { ApiServerURL, version, ApiServerGrapqhlURL };
