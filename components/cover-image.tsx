import cn from 'classnames'
import Link from 'next/link'

type Props = {
  title: string
  src: string
  folder?: string
  slug?: string
}

const CoverImage = ({ title, src, folder, slug }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/${folder}/${slug}`} href="/[folder]/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
