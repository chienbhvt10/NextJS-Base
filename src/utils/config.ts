const baseApiServerURL = process.env.NEXT_PUBLIC_BASE_URL
  ? process.env.NEXT_PUBLIC_BASE_URL
  : 'http://localhost:3000';

const version = process.env.NEXT_PUBLIC_VERSION;

export { baseApiServerURL, version };
