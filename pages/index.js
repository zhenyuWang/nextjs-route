import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>home page</h1>
      <ul>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link href='/portfolio/list'>Portfolio/list</Link>
        </li>
        <li>
          <Link href='/portfolio/111'>Portfolio/id</Link>
        </li>
        <li>
          <Link href='/clients'>Clients</Link>
        </li>
        <li>
          <Link href='/clients/111/222'>Clients/userId/clientId</Link>
        </li>
        <li>
          <Link href='/blog'>Blog</Link>
        </li>
        <li>
          <Link href='/blog/2023/10'>blog/year/month</Link>
        </li>
        <li>
          <Link href='/blog/2023/10/02'>blog/year/month/day</Link>
        </li>
        <li>
          <Link href='/blog/2023/10/02/111'>blog/year/month/day/id</Link>
        </li>
      </ul>
    </>
  )
}
