import { useRouter } from 'next/router'

export default function About() {
  const router = useRouter()

  return (
    <>
      <h1>About page</h1>
      <button onClick={() => router.replace('/')}>Home by replace</button>
    </>
  )
}
