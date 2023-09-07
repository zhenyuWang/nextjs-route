import Link from 'next/link'

export default function Portfolio() {
  return (
    <>
      <h1>Portfolio page</h1>
      <ul>
        <li>
          <Link href='/portfolio/list'>Portfolio/list</Link>
        </li>
        <li>
          <Link href='/portfolio/111'>Portfolio/id</Link>
        </li>
      </ul>
    </>
  )
}
