import Link from 'next/link'

const Header = () => {
  return (
    <h2 className="flex justify-end text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline mx-4">Top.</a>
      </Link>

      <Link href="/blog">
        <a className="hover:underline mx-4">Blog.</a>
      </Link>

      <Link href="/novel">
        <a className="hover:underline mx-4">Novel.</a>
      </Link>
    </h2>
  )
}

export default Header
