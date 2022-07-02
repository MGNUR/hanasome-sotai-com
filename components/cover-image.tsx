import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import internal from 'stream'

type Props = {
  title: string
  src: string
  folder?: string
  slug?: string
  width?: number
  height?: number
}

const CoverImage = ({ title, src, folder, slug, width, height }: Props) => {
  let image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      layout="fill"
      objectFit="cover"
    />
  )
  if (width) {
    image = (
      <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
      width={width}
      height={height}
    />
    )
  }
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
