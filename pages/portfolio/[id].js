import { useRouter } from 'next/router'

export default function PortfolioItem() {
  const id = useRouter().query.id

  return <h1>Portfolio Item page, id: {id}</h1>
}
