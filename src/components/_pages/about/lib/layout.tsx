import React from 'react'
import {NextComponentType} from 'next'

// TODO: This should be more simple
import {getLayout as getSiteLayout} from '../../index/lib/layout'


const AboutLayout: React.FC = ({ children }) => (
  <div>{children}</div>
)


export const getLayout = (page: React.ReactNode) => getSiteLayout(<AboutLayout>{page}</AboutLayout>)

export default AboutLayout
