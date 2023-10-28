import React from 'react'

interface IProps {
  children: React.ReactNode
}

export default function DashBoardLayout(props: IProps) {
  // page or nested layout
  // layout 中的 children 是 当前 route segment 的 page 和 nested 组件
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
