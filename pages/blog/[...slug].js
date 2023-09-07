import { useRouter } from 'next/router'

export default function Blog() {
  const router = useRouter()
  return (
    <>
      <h1>Blog page</h1>
      <p>route: {router.route}</p>
      <p>slug: {router.query.slug?.join('/')}</p>
    </>
  )
}
