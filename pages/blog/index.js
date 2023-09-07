import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Blog() {
  const router = useRouter()
  const data = [
    ['2023', '10'],
    ['2023', '10', '02'],
    ['2023', '10', '02', '111'],
  ]
  return (
    <>
      <h1>Blog page</h1>
      <button
        onClick={() =>
          router.push({
            pathname: '/blog/[...slug]',
            query: { slug: ['2023', '10'] },
          })
        }>
        blog/2023/10
      </button>
      <ul>
        {data.map((item, index) => {
          const path = item.join('/')
          return (
            <li key={index}>
              <Link href={`/blog/${path}`}>{`blog/${path}`}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
