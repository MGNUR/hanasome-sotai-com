import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Image from 'next/image';
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { SITE_NAME } from '../lib/constants'
import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  const posts = allPosts.slice(0)
  return (
    <>
      <Layout>
        <Head>
          <title>{SITE_NAME}</title>
        </Head>
        <Container>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 mb-1">
            牧場
          </h1>
          <Image
            src="/assets/index/cover.jpg"
             height={1000}
             width={2000}
             alt="牧場"
          />
          <p className="text-lg leading-relaxed m-4">
            ほかの人たちがそのままで存在しているのを信じることが、愛である。
          </p>
          <p className="text-lg leading-relaxed mb-8 text-right">
            ――シモーユ・ヴェイヌ
          </p>
          {posts.length > 0 && <MoreStories posts={posts} />}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
