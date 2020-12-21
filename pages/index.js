import styles from '../styles.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Code = (p) => <code className={styles.inlineCode} {...p} />

const Index = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h1>Redirects with Next.js</h1>
      <hr className={styles.hr} />
      <p>
        The links below are{' '}
        <Link href="/">
          <a>RCTI+</a>
        </Link>
        that redirect an incoming request path to a different destination path.
      </p>
      <nav>
      <img src="/anung-ganteng/gambar-1.jpg" />
        <ul className={styles.list}>
          <li>
            <Link href="/team">
              <a>Visit /team (redirects to /about)</a>
            </Link>
          </li>
          <li>
            <Link href="/old-blog/hello-world">
              <a>
                Visit /old-blog/hello-world (redirects to /news/hello-world)
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog/a/b/hello-world">
              <a>
                Visit /blog/a/b/hello-world (redirects to /news/a/b/hello-world)
              </a>
            </Link>
          </li>
          <li>
            <Link href="/post/123">
              <a>Visit /post/123 (redirects to /news/123)</a>
            </Link>
          </li>
        </ul>
      </nav>
      <p>
        Open <Code>next.config.js</Code> to learn more about the redirects that
        match the links above.
      </p>
      <hr className={styles.hr} />
    </div>
  </div>
)

export default Index
