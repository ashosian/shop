import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl } from "../constant"

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['User'],






  endpoints: (builder) => ({

    getAllUsers: builder.query({
      query: (data) => ({
        url: '/api/v1/user',
        method: 'GET'
      }),
      providesTags: ['User']
    }),

    userLogin: builder.mutation({
      query: (data) => ({
        url: '/api/v1/login',
        body: data,
        method: 'POST',
      }),
    }),
  }),
})

export const { useUserLoginMutation, useGetAllUsersQuery } = authApi