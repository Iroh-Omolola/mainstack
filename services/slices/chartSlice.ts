import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dataApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://fe-task-api.mainstack.io" }),
  endpoints: (builder) => ({
    getData: builder.query<void, string>({
      query: (date) => `/${date}`,
    }),
  }),
})

export const { useGetDataQuery } = dataApi
