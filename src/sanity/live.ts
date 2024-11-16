import { defineLive } from "next-sanity";
import { client } from "@/sanity/client";

const token = process.env.SANITY_API_READ_TOKEN;
if (!token) {
  throw new Error("Missing SANITY_API_READ_TOKEN");
}

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({ apiVersion: "vX" }),
  serverToken: token,
  browserToken: token,
});
