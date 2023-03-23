import Link from 'next/link'
import { SiGithub, SiLinkedin, SiSkype, SiTelegram } from 'react-icons/si'

import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <h1 className="text-center text-headerXl text-fg md:text-left">
        Andrii Lytvyn
      </h1>
      <div className="flex flex-col gap-[24px] text-body">
        <p>
          Hi there! My name is Andrii Lytvyn, and I am a 3rd-year student of CS
          & AI at{' '}
          <Link href="https://lpnu.ua" target="_blank" className={styles.link}>
            Lviv Polytechnic National University
          </Link>
          .
        </p>
        <p>
          Creating UI designs in Figma and bringing them to life is my passion.
          I have been working with Next.js 13, Nuxt 3, and Tailwind CSS lately.
          Here you can find{' '}
          <Link href="/projects" className={styles.link}>
            my projects
          </Link>
          .
        </p>
        <p>
          Aside from that, I have some valuable experience with other tools &
          languages. Learn more on the{' '}
          <Link href="/projects" className={styles.link}>
            skills page
          </Link>
          .
        </p>
        <p>
          Outside of the computer world, I enjoy Ukrainian underground music. In
          the future, I would like to create a project to showcase interesting
          musicians because some deserve much more attention.
        </p>
        <p>
          Feel free to contact me at any time. Below you could find my contacts
          and CV.
        </p>
      </div>
      <hr className="mx-auto w-[3.125rem]" />
      <div className="flex flex-col">
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
            <SiSkype />
            Skype
          </Link>
          ,{' '}
          <Link href="https://t.me/nneeeooo" className={styles.link}>
            <SiTelegram />
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
            <SiLinkedin />
            LinkedIn
          </Link>
          ,{' '}
          <Link
            href="https://github.com/andriilytvyn666"
            className={`${styles.link}`}
          >
            <SiGithub />
            Github
          </Link>
          .
        </span>
        <span>
          Here is my{' '}
          <Link
            href="https://github.com/andriilytvyn666"
            className={styles.link}
          >
            CV
          </Link>
          .
        </span>
      </div>
    </>
  )
}
