import React from 'react'

export default function Debug() {
  if (process.env.NODE_ENV === 'production') {
    return null
  }

  return (
    <div className="fixed z-50 flex items-center justify-center w-10 h-10 bg-bg border-border border text-fg-active bottom-16 left-8">
      <span className="hidden xs:block sm:hidden">xs</span>
      <span className="hidden sm:block md:hidden">sm</span>
      <span className="hidden md:block lg:hidden">md</span>
      <span className="hidden lg:block xl:hidden">lg</span>
      <span className="hidden xl:block 2xl:hidden">xl</span>
      <span className="hidden 2xl:block">2xl</span>
    </div>
  )
}
