import PageHead from '@/app/components/PageHead'
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'

import MdxImage from '../../components/MdxImage'

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath.split('/')[1] === params.slug
  )
  return { title: post === undefined ? null : post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath.split('/')[1] === params.slug
  )

  if (post === undefined) notFound()

  const Content = getMDXComponent(post.body.code)

  return (
    <>
      <PageHead
        title={post.title}
        subtitle={format(parseISO(post.date), 'LLLL d, yyyy')}
        className=""
      />

      <Content components={{ MdxImage }} />
    </>
  )
}

export default PostLayout
