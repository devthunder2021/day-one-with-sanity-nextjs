import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "cb1x8kty",
  dataset: "production",
  apiVersion: "2024-11-16",
  useCdn: false,
});
