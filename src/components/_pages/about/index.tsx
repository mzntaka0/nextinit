import React from 'react'
import {NextPage} from 'next'
import {getLayout} from './lib/layout'
import fetch from 'isomorphic-fetch'
import useSWR from 'swr'


type ExtendedNextPage<P> = NextPage<P> & {getLayout?(page: React.ReactNode): any}
type Props = {
  starts: string
}


const fetcher = async (...args) => {
  const res = await fetch(...args)
  return res.json()
}

const Page: ExtendedNextPage<Props> = ({stars}) => {
  return (
    <div>about starts: {stars}</div>
  );
}

Page.getLayout = getLayout

// refer here: https://codeconqueror.com/blog/fetching-data-in-next-js
Page.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  console.log(json.network_count)
  return {stars: json.network_count}
}


export default Page;
