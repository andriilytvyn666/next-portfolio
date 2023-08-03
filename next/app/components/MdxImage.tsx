import Image from 'next/image'

type Props = {
  src: string
  alt: string
}

export default function MdxImage({ src, alt }: Props) {
  return (
    <div className="overflow-hidden border rounded-lg border-box border-bg-active">
      <Image src={src} alt={alt} width="1280" height="720" />
    </div>
  )
}
