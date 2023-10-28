// The route function must be named as the HTTP method name
export async function POST() {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    })
  }

  const res = await fetch('https://jsonplaceholder.typicode.com/posts', options)
  const data = await res.json()

  return Response.json({ data })
}
