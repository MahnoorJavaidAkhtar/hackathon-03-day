import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Create Sanity client
const client = createClient({
  projectId: "bvh4gp9j", // Replace with your Sanity Project ID
  dataset: "production", // Replace with your dataset
  apiVersion: "2023-01-01", // Use the current date
  useCdn: true,
});


// Configure image builder
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

