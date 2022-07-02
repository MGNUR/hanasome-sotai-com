import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

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
  <div className="flex mb-5">
    <div className="mr-4 w-20 h-20 md:w-32 md:h-32 flex-none relative flex justify-center items-center hover:shadow-lg">
      <CoverImage
        folder={folder}
        slug={slug}
        title={title}
        src={coverImage}
        width={350}
        height={350}
      />
    </div>
    <div>
      <p className="text-xl font-bold mb-2 leading-snug">
        <Link as={`/${folder}/${slug}`} href="/[folder]/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </p>
      <div className="text-sm text-paleyYellow-dark">
        <DateFormatter dateString={date} />
      </div>
    </div>
  </div>
  )
}

export default PostPreview
