import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-8">
      <div className="flex flex-col gap-4">
        <Image
          src="/images/404.gif"
          alt="404"
          width={256}
          height={256}
          className="w-64 aspect-square"
        />
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-fg-active text-title">404</h1>
          <p className="text-body">how the hell you got this error dude?</p>
        </div>
      </div>
      <Link
        href="/"
        type="button"
        className="px-4 py-2 border rounded-lg text-body border-border bg-bg-active"
      >
        back to homepage
      </Link>
    </div>
  )
}
