import React, { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { getAllPosts, getSinglePost } from '../../utils/mdx'
import CustomLink from '@/components/customlink'

const Post = ({ code, frontmatter }) => {
  const Component = useMemo(() => getMDXComponent(code), [code])
  return (
    <div className='pt-40'>
      <h1 className='text-4xl font-EB mb-4'>{frontmatter.title}</h1>
      <Component
        components={{
          a: CustomLink,
        }}
      />
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug)
  return {
    props: { ...post },
  }
}

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }))
  return {
    paths,
    fallback: false,
  }
}

export default Post
