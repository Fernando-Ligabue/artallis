import { createClient } from "@sanity/client";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION;
const useCdn = import.meta.env.VITE_SANITY_USECDN;

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});
