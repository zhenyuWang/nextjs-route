import { useRouter } from 'next/router'
import Link from 'next/link'

export default function ClientsPage() {
  const router = useRouter()
  const data = [
    { userId: 'user1', clientId: 'client1' },
    { userId: 'user1', clientId: 'client2' },
    { userId: 'user2', clientId: 'client3' },
    { userId: 'user2', clientId: 'client4' },
  ]
  return (
    <div>
      <h1>The Clients Page</h1>
      <button
        onClick={() =>
          router.push({
            pathname: '/clients/[userId]/[clientId]',
            query: { userId: 'user1', clientId: 'client1' },
          })
        }>
        clients/user1/client1
      </button>
      <ul>
        {data.map(({ userId, clientId }) => (
          <li>
            <Link
              href={{
                pathname: '/clients/[userId]/[clientId]',
                query: { userId, clientId },
              }}>
              Clients/{userId}/{clientId}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
