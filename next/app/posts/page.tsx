import { allPosts } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'

import BlogCard from '../components/BlogCard'

export default function Posts() {
  return (
    <div className="flex flex-col gap-4">
      {allPosts
        .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
        .map((post) => {
          return (
            <BlogCard
              key={post._id}
              title={post.title}
              date={format(parseISO(post.date), 'LLLL d, yyyy')}
              url={`/posts/${post._raw.flattenedPath}`}
            />
          )
        })}
    </div>
  )
}
