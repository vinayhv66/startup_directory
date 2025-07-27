// sanity/lib/read-client.ts
import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from '../env'

export const readClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
