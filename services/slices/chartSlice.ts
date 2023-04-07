import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface IProps{
  top_locations: any,
  graph_data:any,
  top_sources:any,
}
export const dataApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://fe-task-api.mainstack.io" }),
  endpoints: (builder) => ({
    getData: builder.query<IProps, any>({
      query: (date) => `/${date}`,
    }),
  }),
})

export const { useGetDataQuery } = dataApi
