import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import {SANITY_APP_TOKEN} from "@env"

export const client = createClient({
  projectId: 'zrj6z2oe',
  dataset:'production',
  apiVersion:'2023-07-08',
  useCdn: true,
  token: SANITY_APP_TOKEN,
});


const builder=imageUrlBuilder(client);
export const urlFor=(source)=>{
  return builder.image(source);
}
