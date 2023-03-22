import Link from 'next/link'

import styles from './page.module.css'

export default function Home() {
  return (
    <div className="flex flex-col gap-8 text-body">
      <h1 className="text-center text-headerXl text-fg md:text-left">
        Andrii Lytvyn
      </h1>
      <div className="flex flex-col gap-[24px]">
        <p>
          Hi there! My name is Andrii Lytvyn, and I am currently studying
          Computer Science & Artificial Intelligence at{' '}
          <Link href="https://lpnu.ua" target="_blank" className={styles.link}>
            Lviv Polytechnic National University
          </Link>
          .
        </p>
        <p>
          I enjoy creating design in Figma & learning web dev. Right now I’m
          discovering Next.js. You can find{' '}
          <Link href="/projects" className={styles.link}>
            project list
          </Link>{' '}
          here.
        </p>
        <p>
          Outside of the computer world, I enjoy Ukrainian underground music. In
          the future, I’d like to create something to showcase those musicians
          because some deserve more attention.
        </p>
        <p>
          Feel free to contact me at any time. Below you could find my contacts,
          CV & skills summary.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col px-6 py-5 rounded-lg bg-bg-active">
          <span>
            Mail me at{' '}
            <Link
              className={styles.link}
              href="mailto:lytvyn.andrii.contact@gmail.com"
            >
              lytvyn.andrii.contact@gmail.com
            </Link>
            .
          </span>
          <span>
            Contact me in{' '}
            <Link
              href="https://join.skype.com/invite/KOwuCulY372x"
              className={styles.link}
            >
              Skype
            </Link>
            ,{' '}
            <Link href="https://t.me/nneeeooo" className={styles.link}>
              Telegram
            </Link>
            .{' '}
          </span>
          <span>
            Find me on{' '}
            <Link
              href="https://www.linkedin.com/in/andrii-lytvyn-80350a226/"
              className={styles.link}
            >
              LinkedIn
            </Link>
            ,{' '}
            <Link
              href="https://github.com/andriilytvyn666"
              className={styles.link}
            >
              Github
            </Link>
            .
          </span>
        </div>
        <div className="flex flex-col px-6 py-5 rounded-lg bg-bg-active">
          <span>
            Here’s my{' '}
            <Link
              href="https://github.com/andriilytvyn666"
              className={styles.link}
            >
              CV
            </Link>
            .
          </span>
          <span>
            Read my{' '}
            <Link href="/skills" className={styles.link}>
              skills summary
            </Link>
            .
          </span>
        </div>
      </div>
    </div>
  )
}
