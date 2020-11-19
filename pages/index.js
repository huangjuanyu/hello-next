import Link from 'next/link'
import css from './index.scss'


const Index = () => (
  <div>
    <Link href="about?title=hello" as='about.html?title=hello'>
      <a className={css.about}>About Page</a>
    </Link>
    <p>hello next.js</p>
  </div>
)

export default Index