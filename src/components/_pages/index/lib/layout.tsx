import React from 'react'


const SiteLayout: React.FC = ({ children }) => (
  <div>{children}</div>
)


export const getLayout: React.FC = page => <SiteLayout>{page}</SiteLayout>

export default SiteLayout
