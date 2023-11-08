import apiSlice from "../apiSlice";

const ServiceApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getService: builder.query({
            query: () => '/service'
        }),
        getSingleService: builder.query({
            query: (id) => `/service/${id}`
        }),
        getQueryService: builder.query({
            query: (data) => `/service/${data}`
        })
    })
});

export const { useGetServiceQuery, useGetSingleServiceQuery, useGetQueryServiceQuery } = ServiceApi;