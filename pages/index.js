import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <h1>home page</h1>
      <button onClick={() => router.push('/about')}>About by push</button>
      <ul>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link href='/clients'>Clients</Link>
        </li>
        <li>
          <Link href='/blog'>Blog</Link>
        </li>
      </ul>
    </>
  )
}
