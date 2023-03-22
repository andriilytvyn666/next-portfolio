import React from 'react'

type Props = {
  name: string
}

export default function Skill({ name }: Props) {
  return (
    <div className="flex px-3 py-2 rounded-lg bg-bg-active w-fit">
      <h6 className="text-skillChip text-fg">{name}</h6>
    </div>
  )
}
