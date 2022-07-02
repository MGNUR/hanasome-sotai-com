import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Image from 'next/image';
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { SITE_NAME } from '../lib/constants'
import Post from '../types/post'
import { IconContext } from 'react-icons'
import { SiTwitter } from "react-icons/si"
import { SiPixiv } from "react-icons/si"
import { SiHatenabookmark } from "react-icons/si"

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
        <div className="mu-2 flex items-end">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter md:pr-8 mb-1">
            牧場
          </h1>
          <div className="flex ml-auto">
            <a
              href="https://www.pixiv.net/users/57155498"
              className="p-2 mx-2 hover:placeholder-black"
              target="_blank"
            >
              <IconContext.Provider value={{ color: '#ccc', size: '2em' }}>
                <SiPixiv />
              </IconContext.Provider>
            </a>
            <a
              href="https://twitter.com/hanasome_sotai"
              className="p-2 mx-2"
              target="_blank"
            >
              <IconContext.Provider value={{ color: '#ccc', size: '2em' }}>
                <SiTwitter />
              </IconContext.Provider>
            </a>
            <a
              href="https://priest-tea.hatenablog.com/"
              className="p-2 mx-2"
              target="_blank"
            >
              <IconContext.Provider value={{ color: '#ccc', size: '2em' }}>
                <SiHatenabookmark />
              </IconContext.Provider>
            </a>
          </div>
          </div>
          <Image
            src="/assets/index/cover.jpg"
             height={1000}
             width={2000}
             alt="牧場"
          />
          <p className="md:text-lg leading-relaxed m-4 mx-20">
            ほかの人たちがそのままで存在しているのを信じることが、愛である。
          </p>
          <p className="md:text-lg leading-relaxed mb-8 text-right mx-20">
            ――シモーユ・ヴェイヌ
          </p>
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts('_posts', [
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
