// The route function must be named as the HTTP method name
export async function GET() {
  const options = {
    method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    // }
  }

  const res = await fetch('https://jsonplaceholder.typicode.com/posts', options)
  const data = await res.json()

  return Response.json({ data })
}
