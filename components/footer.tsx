import Container from './container'
import { IconContext } from 'react-icons'
import { SiTwitter } from "react-icons/si"
import { SiPixiv } from "react-icons/si"
import { SiHatenabookmark } from "react-icons/si"

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="flex justify-end">
          <a
            href="https://www.pixiv.net/users/57155498"
            className="p-2 mx-3"
            target="_blank"
          >
            <IconContext.Provider value={{ size: '2em' }}>
              <SiPixiv />
            </IconContext.Provider>
          </a>
          <a
            href="https://twitter.com/hanasome_sotai"
            className="p-2 mx-3"
            target="_blank"
          >
            <IconContext.Provider value={{ size: '2em' }}>
              <SiTwitter />
            </IconContext.Provider>
          </a>
          <a
            href="https://priest-tea.hatenablog.com/"
            className="p-2 mx-3"
            target="_blank"
          >
            <IconContext.Provider value={{ size: '2em' }}>
              <SiHatenabookmark />
            </IconContext.Provider>
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
