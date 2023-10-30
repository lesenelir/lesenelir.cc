import type { MDXComponents } from 'mdx/types'

// MDX is a superset of Markdown that lets you write JSX in your Markdown files.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components
  }
}
