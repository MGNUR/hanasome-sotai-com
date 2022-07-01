import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { SITE_NAME } from '../lib/constants'
import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

export default function Novel({ allPosts }: Props) {
  const morePosts = allPosts.slice(0)
  return (
    <>
      <Layout>
        <Head>
          <title>Novel | {SITE_NAME}</title>
        </Head>
        <Container>
          <section className="flex-colmd:flex-row flex items-end md:justify-between mt-16 mb-16 md:mb-12">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
              Novel.
            </h1>
          </section>
          {morePosts.length > 0 && <MoreStories folder='novels' posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts('_novels', ['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'])

  return {
    props: { allPosts },
  }
}