import React from 'react'
import {NextPage} from 'next'
import {getLayout} from './lib/layout'
//import fetch from 'isomorphic-fetch'
import { request } from 'graphql-request'
import useSWR from 'swr'


// TODO: move this type to other module for readability
type ExtendedNextPage<P> = NextPage<P> & {getLayout?(page: React.ReactNode): any}
type Props = {
  initialData: any,
  url: string,
  query: string
}

// TODO: move this fetcher to ./lib/fetch.tsx
const fetcher = async (...args) => {
  const res = await request(...args)
  return JSON.stringify(res)
}

const Page: ExtendedNextPage<Props> = ({initialData, url, query}) => {
  const {data, error, isValidating, revalidate} = useSWR(query, fetcher, {initialData})
  return (
    <div>hoge {data}</div>
  );
}

Page.getLayout = getLayout

// refer here: https://codeconqueror.com/blog/fetching-data-in-next-js
Page.getInitialProps = async () => {
  const url = 'http://localhost:3002/api/graphql'
  const query = `
  {
    users {
      name
    }
  }
  `
  const initialData = await fetcher(url, query)
  return {initialData, url, query}
}


export default Page;
