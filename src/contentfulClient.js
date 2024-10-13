import { createClient } from 'contentful';

const client = createClient({
  space: 'l21vaw49ev4l', // Replace with your Space ID
  accessToken: 'xXQbCKinxG_RScJ1YZR2a3IEe4HNAIV4VMcLtwrMT8M', // Replace with your Access Token
});

export default client;