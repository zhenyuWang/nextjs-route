import Link from 'next/link'

export default function ClientsPage() {
  const data = [
    { userId: 'user1', clientId: 'client1' },
    { userId: 'user1', clientId: 'client2' },
    { userId: 'user2', clientId: 'client3' },
    { userId: 'user2', clientId: 'client4' },
  ]
  return (
    <div>
      <h1>The Clients Page</h1>
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
