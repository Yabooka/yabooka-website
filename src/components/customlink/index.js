import Link from 'next/link'

export default function CustomLink({ as, href, ...otherProps }) {
  return (
    <>
      <Link as={as} href={href} className='text-red font-EB'>
        <a {...otherProps} />
      </Link>
    </>
  )
}
