import React from 'react'

import client from '../../client'

export default async function Skills() {
  const data = await client.fetch<Skills>(`*[_type == "skills"][0]`, {
    next: { cache: 'force-cache' },
  })

  return (
    <>
      sorry this page is deprecated
      <br />
      {"you'd bette go see resume page"}
    </>
  )
}
