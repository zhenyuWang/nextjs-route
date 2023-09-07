import { useRouter } from 'next/router'

export default function ClientItem() {
  const router = useRouter()
  console.log(router)
  return (
    <div>
      <h1>Client item page</h1>
      <p>route: {router.route}</p>
      <p>User id: {router.query.userId}</p>
      <p>Client id: {router.query.clientId}</p>
    </div>
  )
}
