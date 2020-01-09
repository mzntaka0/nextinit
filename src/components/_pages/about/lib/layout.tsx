import React from 'react'
import {NextComponentType} from 'next'

// TODO: This should be more simple
import {getLayout as getSiteLayout} from '../../index/lib/layout'

// The definition of the layout of about page
const AboutLayout = ({ children }) => (
  <div>{children}</div>
)


export const getLayout = page => getSiteLayout(<AboutLayout>{page}</AboutLayout>)

export default AboutLayout
