import NextLink from 'next/link'
import { useRouter } from 'next/router'

export default function Link({ href, children }) {
  const router = useRouter()
  return (
    <NextLink href={href}>
      <a
        className={
          router.asPath === href ? 'text-red' : 'text-white hover:text-red'
        }
      >
        {children}
      </a>
    </NextLink>
  )
}
