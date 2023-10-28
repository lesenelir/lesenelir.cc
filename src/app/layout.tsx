import React from 'react'
import type { Metadata } from 'next'

import './globals.css'

interface IProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Lesenelir Zhou',
  description: 'Lesenelir Zhou personal website',
}

// Root Layout must container <html> and <body> tag
export default function RootLayout(props: IProps) {
  const {children} = props

  return (
    <html lang="en">
      <body className={''}>
        <p>from root layout</p>
        {children}
      </body>
    </html>
  )
}
