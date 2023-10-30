import Image from 'next/image'

export default function PicsCard() {
  return (
    <div className="w-[18.5rem] aspec-[4/3] bg-bg-active border border-border hover:border-border-active overflow-hidden box-content">
      <Image
        src="/images/pic.webp"
        alt="pic"
        width={296}
        height={222}
        className="hover:scale-[107%] select-none"
      />
    </div>
  )
}
