import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
  projectId:'ryihume4',
  dataset: "production",
  apiVersion: "2022-12-30", // use current UTC date - see "specifying API version"!
  token: process.env.NEXT_APP_SANITY_TOKEN, // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});
export const builder = imageUrlBuilder(client);

export const urlFor=(source)=> {
  return builder.image(source);
}
