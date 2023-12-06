import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { baseUrl } from '../features/constant';
// // import { SERVER_API_URL } from '../constants/domains';

export const rtkBaseQuery = fetchBaseQuery({

  baseUrl: baseUrl,


  prepareHeaders: (headers, { getState }) => {
    const token = getState().user?.value?.token;

    if (token) {
      // headers.set("Content-type", "appliation/json"),
      headers.set('Authorization', `Token ${token}`);
    }
    return headers;
  },
});