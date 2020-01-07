import React from 'react'
import {NextPage} from 'next'
import App from 'next/app'


type ExtendedNextPage = NextPage & {getLayout?(page: React.ReactNode): any}


class MyApp extends App<{Component: ExtendedNextPage, pageProps: any, router: any }> {
  render() {
    const { Component, pageProps, router } = this.props

    const getLayout = Component.getLayout || (page => page)

    return getLayout(<Component {...pageProps}></Component>)
  }
}

export default MyApp
