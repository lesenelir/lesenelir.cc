interface IProps {
  params: {
    slug: string
  }
}

// blog/1  blog/2  blog/3
export default function SpecificBlogPage(props: IProps) {
  // params.slug
  const {params} = props

  return (
    <>
      specific blog page
      <p>My Post: {params.slug}</p>
    </>
  )
}
