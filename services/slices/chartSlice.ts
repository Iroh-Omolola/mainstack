import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface IProps{
  top_locations: [],
  graph_data:[],
  top_sources:[],
}
export const dataApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://fe-task-api.mainstack.io" }),
  endpoints: (builder) => ({
    getData: builder.query<IProps, string>({
      query: (date) => `/${date}`,
    }),
  }),
})

export const { useGetDataQuery } = dataApi
