import React from 'react'

export default function Category({ category: { id, title, image } }) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href="#"
      className="flex flex-col items-center gap-y-2 transition-all hover:bg-purple-50 text-center p-4 "
    >
      <img
        src={image}
        alt={title}
        className="w-12 h-12 rounded border-gray-200"
      />
      <span className="text-sm font-semibold tracking-tight "> {title} </span>
    </a>
  )
}
