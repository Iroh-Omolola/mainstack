import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// console.log(process.env.APP_API_URL)

export const dataApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://fe-task-api.mainstack.io" }),
  endpoints: (builder) => ({
    getData: builder.query<void, string>({
      query: (date) => `/${date}`,
    }),
  }),
})

export const { useGetDataQuery } = dataApi
