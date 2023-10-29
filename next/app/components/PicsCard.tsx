import Image from 'next/image'

export default function PicsCard() {
  return (
    <div className="w-[24.75rem] aspect-video bg-bg-active border border-border hover:border-border-active overflow-hidden">
      <Image
        src="/images/card.webp"
        alt="card"
        width={336}
        height={222.75}
        className="hover:scale-[107%] w-[24.75rem] aspect-video"
      />
    </div>
  )
}
