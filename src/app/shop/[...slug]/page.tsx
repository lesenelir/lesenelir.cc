interface IProps {
  params: {
    slug: string[]
  }
}

// shop/1       slug: ['1']
// shop/1/2     slug: ['1', '2']
// app/shop/[...slug]/page.js will match /shop/clothes,
// but also /shop/clothes/tops, /shop/clothes/tops/t-shirts
export default function ShopPage(props: IProps) {
  const {params} = props

  return (
    <>
      shop ...slug page
      <p>params slug: {params.slug}</p>
    </>
  )
}

// app/shop/[[...slug]]/page.js will match /shop and /shop/clothes/tops/t-shirts
