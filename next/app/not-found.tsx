import Image from 'next/image'

import ButtonLink from './components/ButtonLink'

export default function NotFound() {
  return (
    <div className="flex flex-col gap-8 w-full h-full items-center justify-center">
      <div className="flex flex-col gap-4">
        <Image
          src="/images/404.gif"
          alt="404"
          width={256}
          height={256}
          className="w-64 aspect-square"
        />
        <div className="flex flex-col gap-1 items-center">
          <h1 className="text-fg-active text-title">404</h1>
          <p className="text-body">how the hell you got this error dude?</p>
        </div>
      </div>
      <button
        type="button"
        className=" text-body rounded-lg border border-border bg-bg-active px-4 py-2"
      >
        back to homepage
      </button>
    </div>
  )
}
