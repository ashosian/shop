import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../constant';

const token = "ab88947e3b0c98268ed54d405bb3ad2ea6c5a634";

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['Product'],


  endpoints: (builder) => ({

    getAllProducts: builder.query({
      query: (data) => ({
        url: '/api/v1/product',
        method: 'GET',
        headers: {
          Authorization: `token ${data}`,
        }
      }),
      providesTags: ['Product']
    }),

    addProduct: builder.mutation({
      query: (query) => ({
        url: '/api/v1/product',
        body: query.body,
        method: 'POST',
        headers: {
          Authorization: query.token
        }
      }),
      invalidatesTags: ['Product']
    }),

  })
})

export const { useGetAllProductsQuery, useAddProductMutation } = productApi
