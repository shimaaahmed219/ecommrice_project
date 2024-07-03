import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: "blouseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    endpoints: (builder) => ({
        getBlouse: builder.query({
            query: () => "blouse"
        }),
        addProduct: builder.mutation({
            query: (item) => ({
                url: "cart",
                method: 'POST',
                body: item
            })
        })
    })
})

export const { useGetBlouseQuery, useAddProductMutation } = apiSlice