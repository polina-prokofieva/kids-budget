import {
  createApi,
  fakeBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { TAGS } from '@store/tags';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fakeBaseQuery(),
  tagTypes: Object.values(TAGS),
  endpoints: () => ({}),
});
