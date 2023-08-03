import { MDXOptions } from 'contentlayer/core'
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import remarkToc, { Options } from 'remark-toc'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
  },
}))

const tocOptions: Options = {
  heading: 'contents',
  maxDepth: 3,
  ordered: true,
  tight: true,
}

const mdxOptions: MDXOptions = {
  remarkPlugins: [remarkGfm, [remarkToc, tocOptions]],
  rehypePlugins: [rehypeSlug],
}

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: mdxOptions,
})
