import React from 'react'

interface IProps {
  children: React.ReactNode
}

export default function DashBoardLayout(props: IProps) {
  // page or nested layout
  const {children} = props

  return (
    <>
      <header className={'bg-green-200'}>
        dashboard layout header
      </header>
      {children}
    </>
  )
}
