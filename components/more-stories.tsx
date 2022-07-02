import PostPreview from './post-preview'
import PostPreviewSmall from './post-preview-small'
import Post from '../types/post'

type Props = {
  folder: string
  posts: Post[]
  smallFlag: boolean
}

const MoreStories = ({ folder, posts, smallFlag }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
        記事一覧
      </h2>
      {smallFlag ? (
        <div className="grid grid-cols-1 md:gap-x-16 lg:gap-x-32 gap-y-10 mb-32">
          {posts.map((post) => (
            <PostPreviewSmall
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              folder={folder}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            folder={folder}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
      )}
    </section>
  )
}

export default MoreStories
