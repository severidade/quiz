import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '4nd77opf',
  dataset: 'production',
  // as informações acima estão no arquivo sanity.cli.js
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: '2023-06-17', // use current date (YYYY-MM-DD) to target the latest API version
})