import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  folder: string
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  folder,
  slug,
}: Props) => {
  return (
    <div>
      <div className="mr-3">
        <CoverImage folder={folder} slug={slug} title={title} src={coverImage} width={600} height={300}/>
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/${folder}/${slug}`} href="/[folder]/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}

export default PostPreview
