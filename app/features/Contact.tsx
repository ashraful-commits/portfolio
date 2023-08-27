import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const ContactSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});

export default ContactSlice;
