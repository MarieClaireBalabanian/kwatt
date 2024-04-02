import  { createClient } from "@sanity/client"

const client = createClient({
  projectId: process.env.REACT_APP_SANITY_ID,
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-04-01"
})

export default client;