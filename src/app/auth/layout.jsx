import React from 'react'

function Layout({children}) {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
        {children}
    </div>
  )
}

export default Layout