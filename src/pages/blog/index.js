import Link from 'next/link'
import { getAllPosts } from '@/utils/mdx'

import Page from '@/components/page'

export default function BlogPage({ postovi }) {
  return (
    <Page
      title='Yabooka | Blog'
      description='Saznajte vise o problemima koji se javljaju kod mobilnih telefona.'
    >
      <ul className='grid gap-10 md:grid-cols-2 md:gap-20 pt-40'>
        {postovi.map((post, index) => (
          <li key={index} className='shadow-md border border-grayBorder'>
            <img
              src={post.frontmatter.image}
              className='block h-auto w-full mb-5'
            />
            <div className='text-xs text-black uppercase pl-5'>
              {post.frontmatter.category} - {post.frontmatter.date}
            </div>
            <Link href={`blog/${post.slug}`}>
              <h2 className='font-EB text-3xl pl-5 pb-5 self-end'>
                {post.frontmatter.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </Page>
  )
}

export const getStaticProps = async () => {
  const postovi = getAllPosts()

  return {
    props: { postovi },
  }
}
