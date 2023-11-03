import Image from 'next/image'
import { FC } from 'react'

type Props = {
  imageUrl: string
}

const PicCard: FC<Props> = ({ imageUrl }) => {
  return (
    <div className="w-[18.5rem] aspec-[4/3] bg-bg-active border border-border hover:border-border-active overflow-hidden box-content">
      <Image
        src={imageUrl}
        alt="pic"
        width={296}
        height={222}
        className="hover:scale-[107%] select-none"
      />
    </div>
  )
}

export default PicCard