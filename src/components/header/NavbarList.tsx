'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const headerList: {name: string, path: string}[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Posts',
    path: '/posts',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Photos',
    path: '/photos',
  }
]

export default function NavbarList() {
  const pathname = usePathname()

  if (pathname.includes('/posts/')) {
    return null
  }

  return (
    <>
      {
        headerList.map(item => (
          <span
            key={item.name}
            className={`header-li ${pathname === item.path ? '' : 'header-li-unActive'}`}
          >
            {
              pathname === item.path ? (
                <p>{item.name}</p>
              ) : (
                <Link href={item.path}>
                  {item.name}
                </Link>
              )
            }
          </span>
        ))
      }
    </>
  )
}
