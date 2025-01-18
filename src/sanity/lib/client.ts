import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "bvh4gp9j",  // replace with your project ID
  dataset: "production",       // replace with your dataset name (e.g., 'production')
  useCdn: process.env.NODE_ENV === "production", // use CDN for production
});

export default client;

