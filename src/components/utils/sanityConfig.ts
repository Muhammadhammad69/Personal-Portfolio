import {createClient} from "next-sanity"

export const client = createClient({
    dataset: "production",
    projectId: "8qbwaxr5",
    apiVersion: "2022-03-07",
    useCdn:true
})